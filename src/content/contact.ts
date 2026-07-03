export interface ContactLink {
  label: string;
  href: string;
}

export interface ContactContent {
  eyebrow: string;
  heading: string;
  message: string;
  location: string;
  availability: string;
  links: ContactLink[];
}

export const contact: ContactContent = {
  eyebrow: 'Contact',
  heading: 'Enterprise frontend systems and UI architecture are the kind of problems I want to keep working on.',
  message: 'The best way to reach me is by email.',
  location: 'Bengaluru, Karnataka, India',
  availability: 'Open to new opportunities',
  links: [
    { label: 'Email', href: '' }, // Placeholder — add the email address to display/link.
    { label: 'LinkedIn', href: '' }, // Placeholder — add LinkedIn profile URL.
    { label: 'GitHub', href: '' }, // Placeholder — add GitHub profile URL, if applicable.
  ],
};
