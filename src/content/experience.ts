export interface ExperienceStage {
  client: string;
  domain: string;
  startDate: string;
  endDate: string | null;
  summary: string;
  responsibilities: string[];
}

export interface ExperienceEntry {
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string | null;
  stages: ExperienceStage[];
}

export const experience: ExperienceEntry[] = [
  {
    company: 'Tata Consultancy Services',
    role: 'Frontend Engineer',
    location: 'Bengaluru, Karnataka, India',
    startDate: '', // TODO: confirm actual joining date, e.g. '2021-01'
    endDate: null, // null = current employer
    stages: [
      {
        client: 'Walgreens Boots Alliance',
        domain: 'Healthcare',
        startDate: '', // TODO: confirm actual start date for this engagement
        endDate: '', // TODO: confirm actual end date for this engagement
        summary:
          'Joined as a frontend engineer on enterprise Healthcare applications, working primarily on feature implementation within an established Angular codebase.',
        responsibilities: [
          'Feature implementation',
          'UI development',
          'Bug fixes and production support',
        ],
      },
      {
        client: 'National Employment Savings Trust (NEST)',
        domain: 'Pension',
        startDate: '', // TODO: confirm actual start date for this engagement
        endDate: null, // null = current engagement
        summary:
          'Moved into Pension systems and took on ownership of features end to end rather than just implementing them — including reusable component design, accessibility, and performance.',
        responsibilities: [
          'Feature ownership',
          'Reusable component architecture',
          'Mentoring junior engineers',
          'Accessibility improvements',
          'Performance optimization',
          'Production support',
        ],
      },
    ],
  },
];
