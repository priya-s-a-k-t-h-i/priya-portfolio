export interface Project {
  id: string;
  title: string;
  client: string;
  industry: string;
  summary: string;
  businessContext: string;
  responsibilities: string[];
  engineeringChallenges: string;
  architectureDecisions: string;
  reusableComponents: string;
  accessibilityConsiderations?: string;
  performanceConsiderations?: string;
  technologies: string[];
  lessonsLearned: string;
}

export const projects: Project[] = [
  {
    id: 'nest',
    title: 'National Employment Savings Trust (NEST)',
    client: 'NEST',
    industry: 'Pension',
    summary:
      'A UK workplace pension scheme platform used by employers and members to manage pension contributions and savings.',
    businessContext:
      'NEST operates at national scale, so the frontend has to work for a wide range of employers — from small businesses submitting contributions by hand to larger organizations integrating through automated processes — as well as individual members checking their own savings. Mistakes in either flow affect real retirement savings, not just a support ticket.',
    responsibilities: [
      'Owned frontend features end to end for employer and member-facing workflows, rather than only implementing designs handed over from another team.',
      'As similar UI patterns showed up across multiple workflows, introduced reusable components that reduced duplication and made later features quicker to build.',
      'Worked through accessibility issues on key journeys to bring them in line with UK public-sector accessibility expectations.',
      'Picked up production issues on live employer and member journeys, which meant understanding how the UI behaved against real data rather than just test scenarios.',
    ],
    engineeringChallenges:
      'The employer and member sides of the platform have different data shapes and different levels of technical comfort, which made it easy to end up with two versions of what was conceptually the same screen. Keeping that from happening meant pushing shared logic into components that could flex for both audiences instead of duplicating screens.',
    architectureDecisions:
      'Where a pattern repeated across employer and member workflows, the preference was to extract it into a shared component early rather than wait for a third use case to justify it — on a platform this size, duplicated UI logic tends to drift out of sync quickly.',
    reusableComponents:
      'Contribution and savings-summary views followed similar layout and validation patterns across several workflows. Consolidating them into shared components meant accessibility and validation fixes only had to be made once.',
    accessibilityConsiderations:
      'UK public-sector accessibility expectations meant checking keyboard navigation, screen reader behavior, and color contrast on employer and member journeys, not just running an automated audit and treating a pass as done.',
    technologies: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'SCSS', 'REST APIs'],
    lessonsLearned:
      'Accessibility work is more effective built into shared components than patched onto individual screens afterward — fixing it once in the right place covers every workflow that reuses it.',
  },
  {
    id: 'walgreens-boots-alliance',
    title: 'Walgreens Boots Alliance',
    client: 'Walgreens Boots Alliance',
    industry: 'Healthcare / Retail Pharmacy',
    summary:
      'Enterprise applications supporting healthcare and retail pharmacy operations for a multinational pharmacy-led health and wellbeing company.',
    businessContext:
      'The applications sat within an established enterprise architecture already in use across multiple teams, supporting healthcare and pharmacy operations at multinational retail scale — so changes needed to fit existing patterns rather than introduce new ones for their own sake.',
    responsibilities: [
      'Implemented frontend features for internal and customer-facing healthcare applications within an existing Angular architecture and shared component library.',
      'Worked through production issues and supported release cycles alongside the wider engineering team.',
    ],
    engineeringChallenges:
      'Most of the challenge here was working inside a large, already-established codebase — understanding existing conventions and shared components well enough to extend them consistently, rather than introducing a parallel way of doing things.',
    architectureDecisions:
      'Followed the existing component library and architectural conventions already in place, favoring consistency with the rest of the platform over introducing new patterns for individual features.',
    reusableComponents:
      'Reused existing shared components wherever the design allowed, rather than building one-off versions for individual features.',
    technologies: ['Angular', 'TypeScript', 'JavaScript', 'SCSS', 'REST APIs'],
    lessonsLearned:
      'Working inside a mature, established codebase is a different skill from building something new — it is more about reading the existing conventions correctly than about introducing better ones.',
  },
  {
    id: 'matrix-report',
    title: 'Matrix Report',
    client: 'Internal enterprise reporting',
    industry: 'Enterprise Reporting',
    summary:
      'An internal reporting application providing structured, matrix-style views of operational data for enterprise stakeholders.',
    businessContext:
      'Stakeholders used this reporting view to make operational decisions, so the frontend needed to present dense, structured data clearly and stay usable as the underlying data grew.',
    responsibilities: [
      'Built frontend views for complex, matrix-style data reporting used directly by enterprise stakeholders.',
      'Worked on performance for large, data-heavy views as the volume of underlying data grew.',
      'Collaborated with backend teams on data contracts to keep the reports accurate.',
    ],
    engineeringChallenges:
      'Matrix-style views can slow down quickly once the amount of underlying data grows, especially if every cell triggers its own rendering or change-detection work. The main challenge was keeping the UI responsive as the data grew, without restructuring the whole view for every new report.',
    architectureDecisions:
      'Favored structuring the view so rendering and change-detection work stayed proportional to what had actually changed, rather than re-rendering the full matrix on every update.',
    reusableComponents:
      'Extracted row and cell rendering logic into shared components so formatting and performance fixes applied consistently across every report view built on the same pattern.',
    performanceConsiderations:
      'Because reports could involve a large number of rows and columns, keeping rendering and change detection efficient mattered more here than on typical form-based screens.',
    technologies: ['Angular', 'TypeScript', 'RxJS', 'SCSS'],
    lessonsLearned:
      'Performance problems in data-heavy views are usually structural — they show up once the data grows, not while testing with a handful of rows — so it is worth designing for that early rather than only optimizing after something is already slow.',
  },
  {
    id: 'magnolia-cms',
    title: 'Magnolia CMS Integration',
    client: 'Internal enterprise CMS',
    industry: 'Content Management',
    summary:
      'Frontend integration work with Magnolia CMS, an enterprise content management platform, to deliver content-driven pages within a larger Angular application.',
    businessContext:
      'The goal was to let content teams update page content without needing a new frontend release for every change, which meant the Angular layer had to render CMS-driven content reliably rather than assume a fixed page structure.',
    responsibilities: [
      'Integrated Angular frontend components with content delivered through Magnolia CMS.',
      'Built reusable components to render CMS-driven content consistently across different page types.',
      'Worked with content and backend teams to define content structures that the frontend could render predictably.',
    ],
    engineeringChallenges:
      'CMS-driven content is less predictable than content defined in code — fields can be missing, reordered, or structured slightly differently than expected. The main challenge was rendering that content reliably without the page breaking on the surprising cases.',
    architectureDecisions:
      'Built rendering components around the content structures agreed with the content team, with defensive handling for missing or unexpected fields, rather than assuming CMS content would always match the expected shape.',
    reusableComponents:
      'Built a shared rendering pattern for CMS-driven content that could be reused across page types, instead of writing page-specific rendering logic for each one.',
    technologies: ['Angular', 'TypeScript', 'SCSS', 'REST APIs'],
    lessonsLearned:
      'Content coming from a CMS is best treated as untrusted from a structure standpoint — designing for the fields that might be missing mattered more than designing for the ideal case.',
  },
];
