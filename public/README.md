# public/

Static assets, served as-is at the site root (configured in `angular.json` under `architect.build.options.assets`). Nothing here goes through the build pipeline.

Convention for organizing this folder as it grows:
- `images/` — photos, project screenshots, illustrations
- `icons/` — standalone SVG icons not bundled as components
- `fonts/` — self-hosted font files, if the project ever moves off the Google Fonts CDN loaded in `src/index.html`

`favicon.ico` stays at the root since browsers request it there by convention.
