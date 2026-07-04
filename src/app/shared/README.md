# shared/

Reusable, presentational building blocks used across more than one page or section: buttons, form controls, cards, icons, pipes, and directives with no page-specific knowledge.

Rules:
- Components here are driven entirely by `@Input()`/`@Output()` — no direct imports from `src/content`.
- If a component only ever renders one section's content, it belongs with that section under `pages/`, not here.
- `reveal/` — the `appReveal` directive, adding a fade/translate-in as an element enters the viewport (progressive enhancement over `IntersectionObserver`; respects `prefers-reduced-motion` by never hiding content for those users in the first place). Used by About and Experience; any future section can reuse it the same way.
