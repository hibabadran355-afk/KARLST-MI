# Static site scaffold (built from DESIGN.png)

This folder contains a small static site scaffold created to match the provided `DESIGN.png`.

Files added
- `index.html` — main page (links `assets/styles.css` and `assets/script.js`).
- `assets/styles.css` — responsive styles (Flexbox / Grid).
- `assets/script.js` — tiny JS for mobile menu and footer year.

How to preview locally

1. From the project root run a simple HTTP server. Example using Python 3:

```bash
python3 -m http.server 8000
```

2. Open http://localhost:8000 in your browser.

Notes & next steps
- The scaffold references the repository `DESIGN.png` (root). Replace or crop it into `assets/images/` if you prefer.
- If you want a pixel-perfect match, provide the font name/colors or allow me to extract them and refine the CSS.
- I can convert this to a React/Next or add tooling (build, minify, deploy) if you want.

Deployment
- This repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml` which will publish the repository root to GitHub Pages on every push to `main` using the built-in `GITHUB_TOKEN`.
- After you push changes, go to the repository Settings → Pages to confirm the site URL and tweak settings if needed.
