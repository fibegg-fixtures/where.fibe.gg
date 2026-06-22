# where.fibe.gg

A tiny, static **single-screen statement** for Fibe — _Where is Fibe going?
Towards EU digital sovereignty._ Part of the why / whats / faq / when family,
sharing its **"Phoenix Terminal"** palette and type system.

## Source of truth

`index.html` is **hand-authored** and is the single source of truth — there is
no build step. Edit it directly. `assets/style.css` holds the styling (shared
Phoenix Terminal system) and `assets/script.js` the behavior (footer year).

The page is one screen: it fills 100vh on large screens and is allowed to grow
taller (scroll) on small ones. The phoenix watermark sits behind the statement.

## Develop

```bash
npm run dev          # http://localhost:5183
```

`npm run dev` serves the folder and hot-reloads open tabs when you edit
`index.html`, `assets/style.css`, or `assets/script.js`. (No dependencies — it
shells out to `python3 -m http.server`.)

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which publishes the
repo as-is to **GitHub Pages** at `where.fibe.gg` (custom domain via `CNAME`).
Requires a DNS record `where.fibe.gg → fibegg-fixtures.github.io`.
