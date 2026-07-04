# core/

Singleton, app-wide concerns: services provided once at the application root (configuration, platform/viewport detection, analytics), route guards, and interceptors.

Rules:
- No components, and no page- or section-specific logic.
- Anything here should make sense to import from any feature — if it only matters to one section, it belongs closer to that section instead.
- Nothing yet — this folder is scaffolding for services introduced in a later commit.
