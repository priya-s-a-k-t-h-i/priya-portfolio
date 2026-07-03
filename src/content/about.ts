export interface AboutContent {
  eyebrow: string;
  heading: string;
  narrative: string[];
  focusAreas: string[];
  goal: string;
  interests: string[];
}

export const about: AboutContent = {
  eyebrow: 'About',
  heading: 'Four and a half years, two domains, one habit: making things reusable.',
  narrative: [
    'I started at Tata Consultancy Services working on enterprise Healthcare applications, then moved into Pension systems — both domains where getting the details wrong has real consequences for the people using them.',
    'Over time, the work shifted from implementing individual features to owning complete frontend experiences — thinking through reusable architecture before writing a component, treating accessibility as part of the design rather than a later pass, and reviewing other engineers’ code closely enough to catch problems before they reached production. Mentoring grew out of that same shift: less about answering questions and more about helping newer engineers reason through decisions themselves.',
    'A significant part of my time still goes into production support, and it has shaped how I write code more than anything else. Watching how software actually behaves once real users, real data, and real edge cases are involved makes it clear why maintainability matters long after a feature ships — the version of the code that is easiest to debug under pressure is usually the version that was easiest to review in the first place.',
  ],
  focusAreas: [
    'Reusable component architecture',
    'Accessibility',
    'Performance optimization',
    'Mentoring',
    'Production support',
  ],
  goal: 'To grow into an Enterprise Frontend Engineer with deep expertise in UI Engineering.',
  interests: ['UI Engineering', 'UI/UX Design'],
};
