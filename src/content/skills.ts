export interface SkillGroup {
  category: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: 'Core',
    items: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'SCSS'],
  },
  {
    category: 'State and Data',
    items: ['RxJS', 'NgRx', 'REST APIs'],
  },
  {
    category: 'UI Engineering',
    items: ['Angular Material', 'Responsive Design', 'Accessibility'],
  },
  {
    category: 'Tooling and Workflow',
    items: [
      'Git',
      'GitLab',
      'Azure DevOps',
      'Jenkins',
      'JIRA',
      'Postman',
      'VS Code',
      'Figma',
      'Chrome DevTools',
    ],
  },
];
