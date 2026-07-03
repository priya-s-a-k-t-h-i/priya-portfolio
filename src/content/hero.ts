export interface HeroCta {
  label: string;
  target: string;
}

export interface HeroContent {
  status: string;
  headlineName: string;
  headlineStatement: string;
  subtext: string;
  credibility: string[];
  primaryCta: HeroCta;
  secondaryCta: HeroCta;
}

export const hero: HeroContent = {
  status: 'Enterprise Frontend Engineer — Open to new opportunities',
  headlineName: 'Priya S.',
  headlineStatement: 'Engineering frontend systems built to be maintained, not just shipped.',
  subtext:
    'Four and a half years building frontend systems for enterprise Healthcare and Pension products — reusable architecture, accessible interfaces, and performance that holds up as those systems grow.',
  credibility: ['4.5+ Years', 'TCS', 'Bengaluru'],
  primaryCta: { label: 'View Projects', target: 'projects' },
  secondaryCta: { label: 'Download Résumé', target: '' }, // Placeholder — wire to the actual resume file when it is available.
};
