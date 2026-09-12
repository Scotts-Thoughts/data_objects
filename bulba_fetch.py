#!/usr/bin/env python3
"""
bulba_fetch.py — cached Bulbapedia fetching for the scrapers.

Bulbapedia is behind a Cloudflare managed challenge that plain HTTP clients
cannot pass.  ``bulba_proxy.js`` (run it with Electron, see its header) opens a
hidden Chromium window, clears the challenge once, and serves ``/fetch``
requests on localhost.  Every helper here goes through that proxy when it is
running (``BULBA_PROXY`` env var, default ``http://127.0.0.1:8765``) and falls
back to a direct request otherwise — which today returns a 403 challenge page
that we detect and refuse to cache.

Two caches live under ``.scrape_cache_bulbapedia/``:

* ``<key>.html``      rendered pages (legacy helpers in scrape_pokedex.py)
* ``wikitext/<key>.txt``  raw wikitext (``action=raw``) used by the learnset
  parser in ``bulba_learnsets.py``

Cache keys are derived from the *percent-encoded* URL so titles that only
differ in characters outside ``[A-Za-z0-9._-]`` (Nidoran♀ / Nidoran♂,
Farfetch'd / Farfetch’d) never collide — the old key scheme replaced every
such character with ``_`` and served Nidoran♂ from Nidoran♀'s cache file.
"""
from __future__ import annotations

import json
import os
import re
import time
import urllib.parse
from pathlib import Path

import requests

BULBAPEDIA_BASE = "https://bulbapedia.bulbagarden.net"
CACHE_DIR = Path(".scrape_cache_bulbapedia")
WIKITEXT_CACHE_DIR = CACHE_DIR / "wikitext"
PROXY = os.environ.get("BULBA_PROXY", "http://127.0.0.1:8765").rstrip("/")
HEADERS = {"User-Agent": "pokedex-scraper/2.0 (github.com/your-repo)"}
REQUEST_DELAY = 0.3
MAX_RETRIES = 3

_last_request_time = 0.0
_proxy_state: bool | None = None     # None = unknown, True = up, False = down


class BulbaFetchError(RuntimeError):
    pass


# ---------------------------------------------------------------------------
# Title helpers
# ---------------------------------------------------------------------------

def normalize_title(species_name: str) -> str:
    """Map a species display name onto the spelling Bulbapedia uses in titles.

    PokéAPI's English names use the typographic apostrophe (Farfetch’d); the
    wiki's article titles use the ASCII one.
    """
    return species_name.replace("’", "'")


def species_title(species_name: str) -> str:
    """'Mr. Mime' -> 'Mr._Mime_(Pokémon)'"""
    return normalize_title(species_name).replace(" ", "_") + "_(Pokémon)"


def learnset_title(species_name: str, gen: int) -> str:
    """Title of the per-generation learnset subpage, e.g.
    'Farfetch'd_(Pokémon)/Generation_VII_learnset'."""
    roman = {1: "I", 2: "II", 3: "III", 4: "IV", 5: "V", 6: "VI",
             7: "VII", 8: "VIII", 9: "IX"}[gen]
    return f"{species_title(species_name)}/Generation_{roman}_learnset"


def quote_title(title: str) -> str:
    return urllib.parse.quote(title, safe="/:()'!*,;=@&+$")


def page_url(title: str) -> str:
    return f"{BULBAPEDIA_BASE}/wiki/{quote_title(title)}"


def raw_url(title: str) -> str:
    return (f"{BULBAPEDIA_BASE}/w/index.php?title="
            f"{urllib.parse.quote(title, safe='')}&action=raw")


# ---------------------------------------------------------------------------
# Cache paths
# ---------------------------------------------------------------------------

def _cache_key(url: str) -> str:
    # Percent-encode first so distinct titles stay distinct, then make the
    # result filesystem-safe.  Keep it readable.
    quoted = urllib.parse.quote(url, safe="")
    key = re.sub(r"[^A-Za-z0-9._-]", "_", quoted)
    return key[:200]


def html_cache_path(url: str) -> Path:
    return CACHE_DIR / (_cache_key(url) + ".html")


def wikitext_cache_path(title: str) -> Path:
    return WIKITEXT_CACHE_DIR / (_cache_key(title) + ".txt")


# ---------------------------------------------------------------------------
# Transport
# ---------------------------------------------------------------------------

def _looks_challenged(status: int, body: str) -> bool:
    return status == 403 or ("Just a moment..." in body[:2000] and "cf-" in body[:4000])


_proxy_checked_at = 0.0


def proxy_available() -> bool:
    """Is bulba_proxy.js answering?  A negative answer is re-checked every
    30 s so a proxy started mid-run gets picked up."""
    global _proxy_state, _proxy_checked_at
    if _proxy_state is True:
        return True
    if _proxy_state is False and time.time() - _proxy_checked_at < 30:
        return False
    try:
        r = requests.get(f"{PROXY}/health", timeout=3)
        _proxy_state = r.ok
    except requests.RequestException:
        _proxy_state = False
    _proxy_checked_at = time.time()
    if not _proxy_state:
        print("  [bulba_fetch] proxy not running at", PROXY,
              "— start `electron bulba_proxy.js` for live Bulbapedia access")
    return _proxy_state


def _throttle() -> None:
    global _last_request_time
    elapsed = time.time() - _last_request_time
    if elapsed < REQUEST_DELAY:
        time.sleep(REQUEST_DELAY - elapsed)
    _last_request_time = time.time()


def fetch_url(url: str) -> tuple[int, str]:
    """Return (status, body) for an absolute Bulbapedia URL, uncached."""
    for attempt in range(1, MAX_RETRIES + 1):
        try:
            if proxy_available():
                r = requests.get(f"{PROXY}/fetch", params={"url": url}, timeout=120)
                r.raise_for_status()
                data = r.json()
                return int(data["status"]), data["body"]
            _throttle()
            r = requests.get(url, headers=HEADERS, timeout=30)
            return r.status_code, r.text
        except (requests.RequestException, ValueError, KeyError) as exc:
            print(f"    [bulbapedia attempt {attempt}/{MAX_RETRIES}] {exc}")
            time.sleep(REQUEST_DELAY * (attempt + 1))
    return 0, ""


def fetch_html(url: str, use_cache: bool = True) -> str | None:
    """Rendered page HTML (cached).  None for 404 / challenge / error."""
    path = html_cache_path(url)
    if use_cache and path.exists():
        return path.read_text(encoding="utf-8")
    status, body = fetch_url(url)
    if status == 404:
        return None
    if status != 200 or _looks_challenged(status, body):
        return None
    if use_cache:
        CACHE_DIR.mkdir(exist_ok=True)
        path.write_text(body, encoding="utf-8")
    return body


_MISSING = "\x00MISSING\x00"


def fetch_wikitext(title: str, use_cache: bool = True) -> str | None:
    """Raw wikitext of a page (cached).  None when the page does not exist.

    Missing pages are cached too (as a sentinel) so a full scrape does not
    keep re-requesting the same non-existent subpages.
    """
    path = wikitext_cache_path(title)
    if use_cache and path.exists():
        text = path.read_text(encoding="utf-8")
        return None if text == _MISSING else text
    status, body = fetch_url(raw_url(title))
    if status == 404:
        if use_cache:
            WIKITEXT_CACHE_DIR.mkdir(parents=True, exist_ok=True)
            path.write_text(_MISSING, encoding="utf-8")
        return None
    if status != 200 or _looks_challenged(status, body):
        raise BulbaFetchError(f"HTTP {status} fetching wikitext for {title!r}")
    if use_cache:
        WIKITEXT_CACHE_DIR.mkdir(parents=True, exist_ok=True)
        path.write_text(body, encoding="utf-8")
    return body


# ---------------------------------------------------------------------------
# Batch wikitext via the MediaWiki API
#
# One API query returns the wikitext of up to 50 titles, so a full scrape
# needs ~250 requests instead of ~12 000.  Cloudflare re-challenges clients
# that issue many rapid requests, which makes the batch endpoint the only
# practical way to refresh the whole cache.
# ---------------------------------------------------------------------------

API_BATCH = 50


def api_url(titles: list[str]) -> str:
    joined = "|".join(titles)
    return (f"{BULBAPEDIA_BASE}/w/api.php?action=query&prop=revisions&rvprop=content"
            f"&rvslots=main&redirects=1&format=json&formatversion=2"
            f"&titles={urllib.parse.quote(joined, safe='')}")


def _title_key(title: str) -> str:
    """MediaWiki's canonical form of a title (spaces, first letter upper)."""
    t = title.replace("_", " ").strip()
    return (t[:1].upper() + t[1:]) if t else t


def prefetch_wikitext(titles: list[str], use_cache: bool = True,
                      progress: bool = True) -> dict[str, str | None]:
    """Fetch the wikitext of many titles with batched API queries, filling the
    per-title cache used by fetch_wikitext().  Returns {title: text|None}."""
    out: dict[str, str | None] = {}
    todo: list[str] = []
    seen: set[str] = set()
    for t in titles:
        if t in seen:
            continue
        seen.add(t)
        path = wikitext_cache_path(t)
        if use_cache and path.exists():
            text = path.read_text(encoding="utf-8")
            out[t] = None if text == _MISSING else text
        else:
            todo.append(t)
    if not todo:
        return out
    WIKITEXT_CACHE_DIR.mkdir(parents=True, exist_ok=True)
    total = len(todo)
    for i in range(0, total, API_BATCH):
        chunk = todo[i:i + API_BATCH]
        if progress:
            print(f"  [bulbapedia] fetching {i + len(chunk)}/{total} pages …", flush=True)
        status, body = fetch_url(api_url(chunk))
        if status != 200 or _looks_challenged(status, body):
            raise BulbaFetchError(f"HTTP {status} from the MediaWiki API")
        try:
            data = json.loads(body)
        except json.JSONDecodeError as exc:
            raise BulbaFetchError(f"bad JSON from the MediaWiki API: {exc}") from exc
        query = data.get("query", {})
        # requested title -> canonical (normalized) -> redirect target -> page
        forward: dict[str, str] = {}
        for n in query.get("normalized", []):
            forward[n["from"]] = n["to"]
        redirect: dict[str, str] = {}
        for r in query.get("redirects", []):
            redirect[r["from"]] = r["to"]
        pages: dict[str, dict] = {}
        for pg in query.get("pages", []):
            pages[pg.get("title", "")] = pg
        for t in chunk:
            canon = forward.get(t, _title_key(t))
            final = redirect.get(canon, canon)
            for _ in range(3):
                if final in redirect:
                    final = redirect[final]
            pg = pages.get(final) or pages.get(canon)
            text: str | None = None
            if pg and not pg.get("missing") and pg.get("revisions"):
                text = pg["revisions"][0].get("slots", {}).get("main", {}).get("content")
            out[t] = text
            wikitext_cache_path(t).write_text(text if text is not None else _MISSING,
                                              encoding="utf-8")
    return out


def resolve_redirect(text: str | None) -> str | None:
    """If a wikitext page is a #REDIRECT, return the target title."""
    if not text:
        return None
    m = re.match(r"\s*#REDIRECT\s*\[\[([^\]|#]+)", text, re.IGNORECASE)
    return m.group(1).replace(" ", "_") if m else None


def fetch_wikitext_following_redirects(title: str, use_cache: bool = True,
                                       max_hops: int = 3) -> tuple[str | None, str]:
    """Return (wikitext, final_title), following #REDIRECT pages."""
    seen = set()
    for _ in range(max_hops):
        if title in seen:
            break
        seen.add(title)
        text = fetch_wikitext(title, use_cache)
        target = resolve_redirect(text)
        if target is None:
            return text, title
        title = target
    return None, title


if __name__ == "__main__":
    import sys
    for t in sys.argv[1:]:
        txt, final = fetch_wikitext_following_redirects(t)
        print(f"=== {t} -> {final}: {'MISSING' if txt is None else f'{len(txt)} chars'}")
        if txt:
            print(txt[:1500])
