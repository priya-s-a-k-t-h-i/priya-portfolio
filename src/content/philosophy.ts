export interface PhilosophyContent {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
}

export const philosophy: PhilosophyContent = {
  eyebrow: 'Philosophy',
  heading: 'How I think about the work.',
  paragraphs: [
    'I think about frontend work less as building screens and more as building something other engineers will spend the next few years living inside. Code that is easy to extend usually matters more than code that solves the immediate problem cleverly.',
    'Reusable architecture earns its cost over time. A component used across a handful of workflows saves more effort than it took to build in the first place, and it tends to fail more predictably when something does go wrong.',
    'Accessibility and performance are not items I get to after the interface works — they are part of what "working" means. An interface that is fast for most users but slow for some, or usable for most but not all, is not finished.',
    'Enterprise products add a layer most tutorials skip: the UI has to hold up against real business rules, real data volumes, and teams that never planned to work together. Good frontend engineering in that setting is as much about understanding the business as it is about writing the code.',
    'None of this is really about impressing anyone. I like building software that the next engineer who opens the file finds reasonably easy to work with — that is usually a better measure of the work than anything a demo can show.',
  ],
};
