# layout/

Structural chrome shared across every page: navigation, footer, and the overall page shell.

Distinct from `shared/` because layout components assume they render once per page rather than being reused inside arbitrary content. Distinct from `pages/` because they are not routed views themselves.

The existing `app/components/navbar` is the current site navigation and will move here when it is rebuilt against the token system and `src/content` — not part of this foundation commit.
