export interface ProofStat {
  value: string;
  label: string;
}

export interface ProofContent {
  eyebrow: string;
  heading: string;
  stats: ProofStat[];
  note: string;
}

export const proof: ProofContent = {
  eyebrow: 'Proof',
  heading: 'What the last 4.5 years add up to.',
  stats: [
    { value: '4.5+', label: 'Years in enterprise frontend engineering' },
    { value: '2', label: 'Domains — Healthcare and Pension' },
    { value: '4', label: 'Enterprise projects delivered' },
    { value: 'Multiple', label: 'Internal awards and recognitions' },
  ],
  note: 'The projects and awards sections below go into the detail behind these numbers.',
};
