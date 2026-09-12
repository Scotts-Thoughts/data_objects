#!/usr/bin/env node
/**
 * bulba_proxy.js — local HTTP proxy that fetches Bulbapedia pages through a
 * hidden Electron BrowserWindow.
 *
 * Why: Bulbapedia sits behind a Cloudflare "managed challenge" that rejects
 * plain HTTP clients (python-requests, Node fetch, even Electron's net module)
 * with a 403 "Just a moment..." page.  A real Chromium renderer passes the
 * challenge automatically in a couple of seconds and receives a cf_clearance
 * cookie; fetch() calls issued *from inside that page* then succeed.  This
 * script exposes that capability on localhost so the Python scrapers
 * (scrape_pokedex.py, verify_bulbapedia.py, …) can keep using their normal
 * cached-fetch helpers.
 *
 * Usage (from the data_objects directory):
 *
 *     ..\solodex\node_modules\.bin\electron.cmd bulba_proxy.js            # port 8765
 *     ..\solodex\node_modules\.bin\electron.cmd bulba_proxy.js --port 9000
 *
 * Leave it running in a separate terminal.  The Python helpers detect the
 * proxy via the BULBA_PROXY environment variable (default
 * http://127.0.0.1:8765) and fall back to a direct request if it is down.
 *
 * Endpoints:
 *     GET /fetch?url=<percent-encoded absolute bulbagarden.net URL>
 *         → JSON {"status": <int>, "body": <string>, "final_url": <string>}
 *     GET /health
 *         → JSON {"ok": true}
 *
 * Only bulbagarden.net URLs are accepted.  Requests are served one at a time
 * with a delay between them: Cloudflare re-challenges a client that fetches
 * too quickly, and the second challenge is often an interactive one.  When
 * that happens the window is shown so you can click the checkbox; the proxy
 * resumes on its own once the page title changes.  Prefer the MediaWiki API
 * batch endpoint (50 titles per request) over per-page fetches.
 */
const { app, BrowserWindow } = require('electron')
const http = require('http')
const { URL } = require('url')

const args = process.argv.slice(2)
const argValue = (flag, dflt) => {
  const i = args.indexOf(flag)
  return i >= 0 ? args[i + 1] : dflt
}
const PORT = parseInt(argValue('--port', '8765'), 10)
const DELAY_MS = parseInt(argValue('--delay', '1500'), 10)   // pause between upstream requests
const HOME = 'https://bulbapedia.bulbagarden.net/wiki/Main_Page'
const AUTO_CHALLENGE_S = 20        // wait this long for the challenge to clear by itself
const MANUAL_CHALLENGE_S = 600     // then show the window and wait for a human

// Keep ad/tracker noise out of the renderer; the wiki content itself is
// served from bulbagarden.net and archives.bulbagarden.net.  Cloudflare's
// challenge script is served from the same origin, so nothing else is needed.
const ALLOWED_HOSTS = /(^|\.)(bulbagarden\.net|cloudflare\.com)$/i

let win = null
let queue = Promise.resolve()
let served = 0

function log(...parts) {
  console.log(new Date().toISOString().slice(11, 19), ...parts)
}

const sleep = ms => new Promise(r => setTimeout(r, ms))

async function pageTitle() {
  try { return await win.webContents.executeJavaScript('document.title') } catch { return '' }
}

async function waitForChallenge() {
  for (let i = 0; i < AUTO_CHALLENGE_S; i++) {
    if (!/just a moment/i.test(await pageTitle())) return true
    await sleep(1000)
  }
  log('challenge did not clear automatically — showing the window, please click the checkbox')
  win.show()
  win.focus()
  for (let i = 0; i < MANUAL_CHALLENGE_S; i++) {
    if (!/just a moment/i.test(await pageTitle())) {
      win.hide()
      return true
    }
    await sleep(1000)
  }
  win.hide()
  return false
}

async function openWindow() {
  if (!win || win.isDestroyed()) {
    win = new BrowserWindow({
      show: false,
      width: 1280,
      height: 900,
      webPreferences: { sandbox: true },
    })
    win.webContents.session.webRequest.onBeforeRequest((details, callback) => {
      let host = ''
      try { host = new URL(details.url).hostname } catch { /* ignore */ }
      callback({ cancel: !ALLOWED_HOSTS.test(host) })
    })
    win.on('close', e => { e.preventDefault(); win.hide() })
  }
  await win.loadURL(HOME).catch(e => log('loadURL error:', e.message))
  const ok = await waitForChallenge()
  log(ok ? 'Cloudflare challenge passed' : 'WARNING: challenge not passed within timeout')
  return ok
}

async function fetchInPage(url) {
  const script = `
    fetch(${JSON.stringify(url)}, { credentials: 'include' })
      .then(async r => ({ status: r.status, cf: r.headers.get('cf-mitigated'), final_url: r.url, body: await r.text() }))
      .catch(e => ({ status: 0, cf: null, final_url: '', body: 'fetch error: ' + e.message }))
  `
  return win.webContents.executeJavaScript(script)
}

async function fetchWithRetry(url) {
  for (let attempt = 1; attempt <= 4; attempt++) {
    if (!win || win.isDestroyed()) await openWindow()
    const r = await fetchInPage(url)
    if (r.status === 403 && r.cf === 'challenge') {
      const pause = 30000 * attempt
      log(`challenge on ${url} (attempt ${attempt}) — backing off ${pause / 1000}s, then reloading`)
      await sleep(pause)
      await openWindow()
      continue
    }
    if (r.status === 0 && attempt < 4) {
      await sleep(2000 * attempt)
      continue
    }
    return r
  }
  return { status: 403, body: 'challenge not cleared', final_url: url }
}

function serve() {
  const server = http.createServer((req, res) => {
    const u = new URL(req.url, `http://127.0.0.1:${PORT}`)
    res.setHeader('Content-Type', 'application/json; charset=utf-8')

    if (u.pathname === '/health') {
      res.end(JSON.stringify({ ok: true, served }))
      return
    }
    if (u.pathname !== '/fetch') {
      res.statusCode = 404
      res.end(JSON.stringify({ error: 'unknown endpoint' }))
      return
    }
    const target = u.searchParams.get('url') || ''
    let host = ''
    try { host = new URL(target).hostname } catch { /* ignore */ }
    if (!/(^|\.)bulbagarden\.net$/i.test(host)) {
      res.statusCode = 400
      res.end(JSON.stringify({ error: 'only bulbagarden.net URLs are allowed' }))
      return
    }

    // Serialise upstream requests.
    queue = queue.then(async () => {
      const t0 = Date.now()
      const r = await fetchWithRetry(target)
      served++
      log(r.status, `${Date.now() - t0}ms`, target.length > 140 ? target.slice(0, 140) + '…' : target)
      res.end(JSON.stringify({ status: r.status, body: r.body, final_url: r.final_url }))
      await sleep(DELAY_MS)
    }).catch(err => {
      log('error:', err.message)
      try {
        res.statusCode = 500
        res.end(JSON.stringify({ error: err.message }))
      } catch { /* response already sent */ }
    })
  })
  server.timeout = 0
  server.listen(PORT, '127.0.0.1', () => {
    log(`bulba_proxy listening on http://127.0.0.1:${PORT}  (GET /fetch?url=…, delay ${DELAY_MS}ms)`)
  })
}

app.whenReady().then(async () => {
  await openWindow()
  serve()
})

app.on('window-all-closed', () => { /* keep running headless */ })
