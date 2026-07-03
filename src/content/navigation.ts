export interface NavItem {
  label: string;
  sectionId: string;
}

export interface NavCta {
  label: string;
  href: string;
}

export const navigation: NavItem[] = [
  { label: 'About', sectionId: 'about' },
  { label: 'Experience', sectionId: 'experience' },
  { label: 'Skills', sectionId: 'skills' },
  { label: 'Projects', sectionId: 'projects' },
  { label: 'Contact', sectionId: 'contact' },
];

export const navCta: NavCta = {
  label: 'Resume',
  href: '', // Placeholder — wire to the actual resume file when it is available.
};
