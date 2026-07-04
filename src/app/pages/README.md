# pages/

Routed, top-level views composed from `layout/`, `shared/`, and page-specific section components. Each page owns its own section components (for example, a future `pages/home/sections/hero`) and reads copy from `src/content` — never hardcoded strings.

`home/` is the single routed page so far, composing its section components from `home/sections/*` (currently just `hero/`). About, Experience, Skills, Projects, Awards, and Contact follow the same `home/sections/<name>` pattern as they're built.
