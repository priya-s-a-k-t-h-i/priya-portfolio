export interface SiteInfo {
  name: string;
  initials: string;
  title: string;
  company: string;
  companyFull: string;
  experience: string;
  location: string;
  timezone: string;
  metaTitle: string;
  metaDescription: string;
}

export const site: SiteInfo = {
  name: 'Priya S',
  initials: 'PS',
  title: 'Frontend Engineer',
  company: 'TCS',
  companyFull: 'Tata Consultancy Services',
  experience: '4.5+ Years',
  location: 'Bengaluru, Karnataka, India',
  timezone: 'IST (UTC+5:30)',
  metaTitle: 'Priya S — Frontend Engineer',
  metaDescription:
    'Frontend Engineer with 4.5+ years building enterprise Angular applications across Healthcare and Pension domains.',
};
