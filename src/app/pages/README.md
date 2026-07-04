# pages/

Routed, top-level views composed from `layout/`, `shared/`, and page-specific section components. Each page owns its own section components (for example, a future `pages/home/sections/hero`) and reads copy from `src/content` — never hardcoded strings.

The existing `app/components/hero` is the current hero section and will move to `pages/home/sections/hero` when it is rebuilt against the token system and `src/content` — that is the next commit, not this one.
