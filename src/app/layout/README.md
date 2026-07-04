# layout/

Structural chrome shared across every page: navigation, footer, and the overall page shell.

Distinct from `shared/` because layout components assume they render once per page rather than being reused inside arbitrary content. Distinct from `pages/` because they are not routed views themselves.

`navbar/` is the site navigation, built against the token system and `src/content/navigation`. A future `footer/` follows the same pattern when the Contact/footer section is built.
