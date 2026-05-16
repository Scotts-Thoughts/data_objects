#!/usr/bin/python3
"""
PokéSprite icon scraper.

Downloads every PNG under https://github.com/msikma/pokesprite/tree/master/icons
into a single flat output folder.  Because basenames collide across
subdirectories (e.g. `bulbasaur.png` exists in both `pokemon/regular/` and
`pokemon/shiny/`), each file is renamed with its subpath as a prefix:

    icons/pokemon/shiny/bulbasaur.png  ->  pokemon_shiny_bulbasaur.png
    icons/ball/beast.png               ->  ball_beast.png
    icons/berry/oran.png               ->  berry_oran.png

Usage:
    python scrape_inventory_sprites.py                       # everything
    python scrape_inventory_sprites.py --output-dir sprites  # custom dir
    python scrape_inventory_sprites.py --no-cache            # re-download
    python scrape_inventory_sprites.py --limit 10            # test run

Requirements:
    pip install requests
"""

import argparse
import sys
import time
from pathlib import Path

import requests


TREE_API = "https://api.github.com/repos/msikma/pokesprite/git/trees/master?recursive=1"
RAW_PREFIX = "https://raw.githubusercontent.com/msikma/pokesprite/master/"
ROOT_DIR = "icons/"
DEFAULT_OUTPUT_DIR = Path("inventory_sprites")
REQUEST_DELAY = 0.05    # seconds between sprite downloads (be nice to GitHub)
MAX_RETRIES = 3
TIMEOUT = 30


def fetch(url, session):
    """GET with retries and exponential backoff."""
    last_err = None
    for attempt in range(MAX_RETRIES):
        try:
            resp = session.get(url, timeout=TIMEOUT)
            resp.raise_for_status()
            return resp
        except requests.RequestException as err:
            last_err = err
            time.sleep(0.5 * (2 ** attempt))
    raise RuntimeError(f"Failed to fetch {url}: {last_err}")


def list_icon_paths(session):
    """Return a sorted list of repo paths for every PNG under icons/."""
    resp = fetch(TREE_API, session)
    data = resp.json()
    if data.get("truncated"):
        raise RuntimeError(
            "GitHub tree response was truncated; the repo is too large for a "
            "single recursive listing. Falling back to per-directory walks is "
            "needed (not implemented)."
        )
    paths = [
        node["path"] for node in data["tree"]
        if node["type"] == "blob"
        and node["path"].startswith(ROOT_DIR)
        and node["path"].lower().endswith(".png")
    ]
    return sorted(paths)


def flat_name_for(repo_path):
    """Turn `icons/pokemon/shiny/bulbasaur.png` into `pokemon_shiny_bulbasaur.png`."""
    rel = repo_path[len(ROOT_DIR):]    # strip the leading "icons/"
    return rel.replace("/", "_")


def download_sprite(url, dest, session, overwrite):
    """Download `url` to `dest`. Returns 'cached', 'downloaded', or raises."""
    if dest.exists() and not overwrite:
        return "cached"
    dest.parent.mkdir(parents=True, exist_ok=True)
    resp = fetch(url, session)
    dest.write_bytes(resp.content)
    return "downloaded"


def main():
    parser = argparse.ArgumentParser(description=__doc__,
                                     formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--output-dir", type=Path, default=DEFAULT_OUTPUT_DIR,
                        help=f"Directory to write sprites into (default: {DEFAULT_OUTPUT_DIR})")
    parser.add_argument("--no-cache", action="store_true",
                        help="Re-download sprites even if they already exist on disk")
    parser.add_argument("--limit", type=int, default=None,
                        help="Stop after N sprites (useful for testing)")
    args = parser.parse_args()

    session = requests.Session()
    session.headers.update({
        "User-Agent": "pokesprite-icon-scraper/1.0",
        "Accept": "application/vnd.github+json",
    })

    print(f"Listing {ROOT_DIR}* via GitHub API")
    paths = list_icon_paths(session)
    if args.limit:
        paths = paths[:args.limit]
    print(f"Found {len(paths)} PNG(s) under {ROOT_DIR}")

    # Sanity check: with the subpath-prefix scheme, flat names must be unique.
    seen = {}
    collisions = []
    for p in paths:
        name = flat_name_for(p)
        if name in seen:
            collisions.append((seen[name], p, name))
        else:
            seen[name] = p
    if collisions:
        print(f"WARNING: {len(collisions)} flat-name collision(s); "
              "later files will overwrite earlier ones:", file=sys.stderr)
        for a, b, name in collisions[:5]:
            print(f"  {a}  vs  {b}  ->  {name}", file=sys.stderr)

    args.output_dir.mkdir(parents=True, exist_ok=True)
    counts = {"downloaded": 0, "cached": 0, "failed": 0}
    for i, repo_path in enumerate(paths, 1):
        url = RAW_PREFIX + repo_path
        dest = args.output_dir / flat_name_for(repo_path)
        try:
            result = download_sprite(url, dest, session, overwrite=args.no_cache)
        except Exception as err:
            counts["failed"] += 1
            print(f"  [{i}/{len(paths)}] FAIL {repo_path}: {err}", file=sys.stderr)
            continue
        counts[result] += 1
        if i == 1 or i % 100 == 0 or i == len(paths):
            print(f"  [{i}/{len(paths)}] {result:>10}  {dest.name}")
        if result == "downloaded":
            time.sleep(REQUEST_DELAY)

    print()
    print(f"Done. downloaded={counts['downloaded']} "
          f"cached={counts['cached']} failed={counts['failed']}")
    print(f"Output: {args.output_dir.resolve()}")
    return 0 if counts["failed"] == 0 else 1


if __name__ == "__main__":
    sys.exit(main())
