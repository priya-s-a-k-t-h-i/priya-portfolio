# shared/

Reusable, presentational building blocks used across more than one page or section: buttons, form controls, cards, icons, pipes, and directives with no page-specific knowledge.

Rules:
- Components here are driven entirely by `@Input()`/`@Output()` — no direct imports from `src/content`.
- If a component only ever renders one section's content, it belongs with that section under `pages/`, not here.
- Nothing yet — this folder is scaffolding for shared UI introduced in a later commit.
