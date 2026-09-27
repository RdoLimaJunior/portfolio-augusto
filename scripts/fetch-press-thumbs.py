"""Baixa a imagem oficial (og:image) de cada matéria do catálogo e salva reduzida em public/img/imprensa/."""
import html
import io
import re
import sys
import urllib.request
from pathlib import Path

from PIL import Image

ROOT = Path(r"C:\Projetos\portfolio-augusto")
OUT = ROOT / "public" / "img" / "imprensa"
OUT.mkdir(parents=True, exist_ok=True)
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36"

src = (ROOT / "src" / "data" / "press.ts").read_text(encoding="utf-8")
blocks = re.split(r"\r?\n  \{\r?\n", src)[1:]
items = []
for b in blocks:
    g = lambda k: (re.search(rf'{k}: "([^"]+)"', b) or [None, None])[1]
    items.append({"outlet": g("outlet"), "date": g("date"), "url": g("url"), "type": g("type")})


def get(url, binary=False, timeout=30):
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept-Language": "pt-BR,pt;q=0.9", "Accept": "*/*"})
    with urllib.request.urlopen(req, timeout=timeout) as r:
        data = r.read()
    return data if binary else data.decode("utf-8", "ignore")


def og_image(page):
    for pat in (
        r'<meta[^>]+property=["\']og:image["\'][^>]*content=["\']([^"\']+)["\']',
        r'<meta[^>]+content=["\']([^"\']+)["\'][^>]*property=["\']og:image["\']',
        r'<meta[^>]+name=["\']twitter:image["\'][^>]*content=["\']([^"\']+)["\']',
    ):
        m = re.search(pat, page, re.I)
        if m:
            return html.unescape(m.group(1))
    return None


def slug(i, it):
    base = re.sub(r"[^a-z0-9]+", "-", (it["outlet"] or "x").lower()).strip("-")
    return f"{i:02d}-{base}-{(it['date'] or 'sem-data')}"


for i, it in enumerate(items, 1):
    name = slug(i, it)
    url = it["url"]
    try:
        if "youtube.com/shorts/" in url or "youtube.com/watch" in url:
            vid = re.search(r"(?:shorts/|v=)([\w-]{11})", url).group(1)
            img_url = f"https://i.ytimg.com/vi/{vid}/hqdefault.jpg"
        elif "instagram.com" in url or "facebook.com" in url:
            print(f"{i:02d} PULA (rede social)  {it['outlet']}")
            continue
        else:
            page = get(url)
            img_url = og_image(page)
        if not img_url:
            print(f"{i:02d} SEM og:image      {it['outlet']} {it['date']}")
            continue
        if img_url.startswith("//"):
            img_url = "https:" + img_url
        data = get(img_url, binary=True)
        im = Image.open(io.BytesIO(data)).convert("RGB")
        w, h = im.size
        if w > 900:
            im = im.resize((900, round(h * 900 / w)), Image.LANCZOS)
        im.save(OUT / f"{name}.jpg", quality=80, optimize=True)
        print(f"{i:02d} OK  {name}.jpg  {w}x{h} -> {im.size[0]}x{im.size[1]}  {len(data)//1024}KB  <- {img_url[:90]}")
    except Exception as e:  # noqa: BLE001
        print(f"{i:02d} ERRO {it['outlet']} {it['date']}: {type(e).__name__} {str(e)[:80]}")
