# Portfolio Content — v1 (Frozen)

The content layer is approved and frozen. This document is the human-readable mirror of everything stored in `src/content/*.ts`. Angular components read from those files directly — this document exists so the copy can be reviewed without reading TypeScript.

## Open items carried over from review

These are the only gaps remaining, and they are intentional — not oversights:

1. **Experience dates.** `experience.ts` has `startDate` / `endDate` fields marked with `// TODO` comments for the TCS joining date and the Healthcare/Pension engagement boundaries. Left blank on purpose rather than guessed, since dates are verifiable facts.
2. **Contact and résumé links.** `contact.ts` (Email, LinkedIn, GitHub) and `navigation.ts` / `hero.ts` (résumé file) all have empty `href`/`target` values with inline comments. Fill in before public launch.
3. **Project narrative fields.** In `projects.ts`, the `businessContext`, `engineeringChallenges`, `architectureDecisions`, `reusableComponents`, and `lessonsLearned` fields for all four projects were written by extrapolating from the client name, industry, and the general responsibility pattern you described — not from specific incidents you confirmed. The tone and structure are approved; the factual specifics inside them still benefit from your read-through against what actually happened on each engagement.
4. **Positioning language.** The hero status line uses "Enterprise Frontend Engineer" as a positioning tagline, while `site.ts`, `experience.ts`, and `about.ts`'s stated goal all treat "Frontend Engineer" as the current title and "Enterprise Frontend Engineer" as the direction you're growing into. This was an explicit choice made earlier in review (the hero is meant to communicate that identity immediately), but it's flagged here since it's the one spot where a tagline reads slightly ahead of the literal job title — worth a final gut-check before this ships.

---

## Site

**Name:** Priya S · **Title:** Frontend Engineer · **Company:** TCS (Tata Consultancy Services)
**Experience:** 4.5+ Years · **Location:** Bengaluru, Karnataka, India · **Timezone:** IST (UTC+5:30)

**Meta title:** Priya S — Frontend Engineer
**Meta description:** Frontend Engineer with 4.5+ years building enterprise Angular applications across Healthcare and Pension domains.

---

## Navigation

About · Experience · Skills · Projects · Contact

**Resume CTA:** "Resume" *(link not yet set)*

---

## Hero

**Status line:** Enterprise Frontend Engineer — Open to new opportunities

**Headline:** Priya S. — Engineering frontend systems built to be maintained, not just shipped.

**Subtext:** Four and a half years building frontend systems for enterprise Healthcare and Pension products — reusable architecture, accessible interfaces, and performance that holds up as those systems grow.

**Credibility strip:** 4.5+ Years · TCS · Bengaluru

**Primary CTA:** View Projects
**Secondary CTA:** Download Résumé *(link not yet set)*

---

## About

**Heading:** Four and a half years, two domains, one habit: making things reusable.

I started at Tata Consultancy Services working on enterprise Healthcare applications, then moved into Pension systems — both domains where getting the details wrong has real consequences for the people using them.

Over time, the work shifted from implementing individual features to owning complete frontend experiences — thinking through reusable architecture before writing a component, treating accessibility as part of the design rather than a later pass, and reviewing other engineers' code closely enough to catch problems before they reached production. Mentoring grew out of that same shift: less about answering questions and more about helping newer engineers reason through decisions themselves.

A significant part of my time still goes into production support, and it has shaped how I write code more than anything else. Watching how software actually behaves once real users, real data, and real edge cases are involved makes it clear why maintainability matters long after a feature ships — the version of the code that is easiest to debug under pressure is usually the version that was easiest to review in the first place.

**Current focus areas:** Reusable component architecture, Accessibility, Performance optimization, Mentoring, Production support

**Goal:** To grow into an Enterprise Frontend Engineer with deep expertise in UI Engineering.

**Long-term interests:** UI Engineering, UI/UX Design

---

## Proof

**Heading:** What the last 4.5 years add up to.

| | |
|---|---|
| 4.5+ | Years in enterprise frontend engineering |
| 2 | Domains — Healthcare and Pension |
| 4 | Enterprise projects delivered |
| Multiple | Internal awards and recognitions |

The projects and awards sections below go into the detail behind these numbers.

---

## Skills

**Core:** Angular, TypeScript, JavaScript, HTML, CSS, SCSS

**State and Data:** RxJS, NgRx, REST APIs

**UI Engineering:** Angular Material, Responsive Design, Accessibility

**Tooling and Workflow:** Git, GitLab, Azure DevOps, Jenkins, JIRA, Postman, VS Code, Figma, Chrome DevTools

---

## Experience

### Tata Consultancy Services — Frontend Engineer
Bengaluru, Karnataka, India · Joined: *TBD* · Current employer

**Walgreens Boots Alliance — Healthcare** · *dates TBD*
Joined as a frontend engineer on enterprise Healthcare applications, working primarily on feature implementation within an established Angular codebase.
Responsibilities: Feature implementation, UI development, Bug fixes and production support.

**National Employment Savings Trust (NEST) — Pension** · *start date TBD, current engagement*
Moved into Pension systems and took on ownership of features end to end rather than just implementing them — including reusable component design, accessibility, and performance.
Responsibilities: Feature ownership, Reusable component architecture, Mentoring junior engineers, Accessibility improvements, Performance optimization, Production support.

---

## Projects

### National Employment Savings Trust (NEST)
**Industry:** Pension

A UK workplace pension scheme platform used by employers and members to manage pension contributions and savings.

**Business context:** NEST operates at national scale, so the frontend has to work for a wide range of employers — from small businesses submitting contributions by hand to larger organizations integrating through automated processes — as well as individual members checking their own savings. Mistakes in either flow affect real retirement savings, not just a support ticket.

**Responsibilities:**
- Owned frontend features end to end for employer and member-facing workflows, rather than only implementing designs handed over from another team.
- As similar UI patterns showed up across multiple workflows, introduced reusable components that reduced duplication and made later features quicker to build.
- Worked through accessibility issues on key journeys to bring them in line with UK public-sector accessibility expectations.
- Picked up production issues on live employer and member journeys, which meant understanding how the UI behaved against real data rather than just test scenarios.

**Engineering challenges:** The employer and member sides of the platform have different data shapes and different levels of technical comfort, which made it easy to end up with two versions of what was conceptually the same screen. Keeping that from happening meant pushing shared logic into components that could flex for both audiences instead of duplicating screens.

**Architecture decisions:** Where a pattern repeated across employer and member workflows, the preference was to extract it into a shared component early rather than wait for a third use case to justify it — on a platform this size, duplicated UI logic tends to drift out of sync quickly.

**Reusable components:** Contribution and savings-summary views followed similar layout and validation patterns across several workflows. Consolidating them into shared components meant accessibility and validation fixes only had to be made once.

**Accessibility considerations:** UK public-sector accessibility expectations meant checking keyboard navigation, screen reader behavior, and color contrast on employer and member journeys, not just running an automated audit and treating a pass as done.

**Key technologies:** Angular, TypeScript, RxJS, NgRx, SCSS, REST APIs

**Lessons learned:** Accessibility work is more effective built into shared components than patched onto individual screens afterward — fixing it once in the right place covers every workflow that reuses it.

---

### Walgreens Boots Alliance
**Industry:** Healthcare / Retail Pharmacy

Enterprise applications supporting healthcare and retail pharmacy operations for a multinational pharmacy-led health and wellbeing company.

**Business context:** The applications sat within an established enterprise architecture already in use across multiple teams, supporting healthcare and pharmacy operations at multinational retail scale — so changes needed to fit existing patterns rather than introduce new ones for their own sake.

**Responsibilities:**
- Implemented frontend features for internal and customer-facing healthcare applications within an existing Angular architecture and shared component library.
- Worked through production issues and supported release cycles alongside the wider engineering team.

**Engineering challenges:** Most of the challenge here was working inside a large, already-established codebase — understanding existing conventions and shared components well enough to extend them consistently, rather than introducing a parallel way of doing things.

**Architecture decisions:** Followed the existing component library and architectural conventions already in place, favoring consistency with the rest of the platform over introducing new patterns for individual features.

**Reusable components:** Reused existing shared components wherever the design allowed, rather than building one-off versions for individual features.

**Key technologies:** Angular, TypeScript, JavaScript, SCSS, REST APIs

**Lessons learned:** Working inside a mature, established codebase is a different skill from building something new — it is more about reading the existing conventions correctly than about introducing better ones.

---

### Matrix Report
**Industry:** Enterprise Reporting

An internal reporting application providing structured, matrix-style views of operational data for enterprise stakeholders.

**Business context:** Stakeholders used this reporting view to make operational decisions, so the frontend needed to present dense, structured data clearly and stay usable as the underlying data grew.

**Responsibilities:**
- Built frontend views for complex, matrix-style data reporting used directly by enterprise stakeholders.
- Worked on performance for large, data-heavy views as the volume of underlying data grew.
- Collaborated with backend teams on data contracts to keep the reports accurate.

**Engineering challenges:** Matrix-style views can slow down quickly once the amount of underlying data grows, especially if every cell triggers its own rendering or change-detection work. The main challenge was keeping the UI responsive as the data grew, without restructuring the whole view for every new report.

**Architecture decisions:** Favored structuring the view so rendering and change-detection work stayed proportional to what had actually changed, rather than re-rendering the full matrix on every update.

**Reusable components:** Extracted row and cell rendering logic into shared components so formatting and performance fixes applied consistently across every report view built on the same pattern.

**Performance considerations:** Because reports could involve a large number of rows and columns, keeping rendering and change detection efficient mattered more here than on typical form-based screens.

**Key technologies:** Angular, TypeScript, RxJS, SCSS

**Lessons learned:** Performance problems in data-heavy views are usually structural — they show up once the data grows, not while testing with a handful of rows — so it is worth designing for that early rather than only optimizing after something is already slow.

---

### Magnolia CMS Integration
**Industry:** Content Management

Frontend integration work with Magnolia CMS, an enterprise content management platform, to deliver content-driven pages within a larger Angular application.

**Business context:** The goal was to let content teams update page content without needing a new frontend release for every change, which meant the Angular layer had to render CMS-driven content reliably rather than assume a fixed page structure.

**Responsibilities:**
- Integrated Angular frontend components with content delivered through Magnolia CMS.
- Built reusable components to render CMS-driven content consistently across different page types.
- Worked with content and backend teams to define content structures that the frontend could render predictably.

**Engineering challenges:** CMS-driven content is less predictable than content defined in code — fields can be missing, reordered, or structured slightly differently than expected. The main challenge was rendering that content reliably without the page breaking on the surprising cases.

**Architecture decisions:** Built rendering components around the content structures agreed with the content team, with defensive handling for missing or unexpected fields, rather than assuming CMS content would always match the expected shape.

**Reusable components:** Built a shared rendering pattern for CMS-driven content that could be reused across page types, instead of writing page-specific rendering logic for each one.

**Key technologies:** Angular, TypeScript, SCSS, REST APIs

**Lessons learned:** Content coming from a CMS is best treated as untrusted from a structure standpoint — designing for the fields that might be missing mattered more than designing for the ideal case.

---

## Awards

- Best Case Study Award
- Best Team Award
- Special Achievement Award
- Special Initiative Award
- On-the-Spot Team Award (received multiple times)
- Applause for Team Award
- UK Stakeholder Appreciation
- Junior Mentoring Recognition

---

## Philosophy

**Heading:** How I think about the work.

I think about frontend work less as building screens and more as building something other engineers will spend the next few years living inside. Code that is easy to extend usually matters more than code that solves the immediate problem cleverly.

Reusable architecture earns its cost over time. A component used across a handful of workflows saves more effort than it took to build in the first place, and it tends to fail more predictably when something does go wrong.

Accessibility and performance are not items I get to after the interface works — they are part of what "working" means. An interface that is fast for most users but slow for some, or usable for most but not all, is not finished.

Enterprise products add a layer most tutorials skip: the UI has to hold up against real business rules, real data volumes, and teams that never planned to work together. Good frontend engineering in that setting is as much about understanding the business as it is about writing the code.

None of this is really about impressing anyone. I like building software that the next engineer who opens the file finds reasonably easy to work with — that is usually a better measure of the work than anything a demo can show.

---

## Contact

**Heading:** Enterprise frontend systems and UI architecture are the kind of problems I want to keep working on.

The best way to reach me is by email.

**Location:** Bengaluru, Karnataka, India
**Availability:** Open to new opportunities

**Links:** Email, LinkedIn, GitHub *(all three currently unset in `contact.ts`)*

---

## Source files

| Section | File |
|---|---|
| Site meta | `src/content/site.ts` |
| Navigation | `src/content/navigation.ts` |
| Hero | `src/content/hero.ts` |
| About | `src/content/about.ts` |
| Proof | `src/content/proof.ts` |
| Skills | `src/content/skills.ts` |
| Experience | `src/content/experience.ts` |
| Projects | `src/content/projects.ts` |
| Awards | `src/content/awards.ts` |
| Philosophy | `src/content/philosophy.ts` |
| Contact | `src/content/contact.ts` |
