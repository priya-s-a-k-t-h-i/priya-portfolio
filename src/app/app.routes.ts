import { Routes } from '@angular/router';
import { About } from './sections/about/about';
import { Experience } from './sections/experience/experience';
import { Skills } from './sections/skills/skills';
import { Projects } from './sections/projects/projects';
import { Education } from './sections/education/education';
import { Certifications } from './sections/certifications/certifications';
import { Achievements } from './sections/achievements/achievements';
import { Interests } from './sections/interests/interests';
import { Contact } from './sections/contact/contact';

export const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: About },
  { path: 'experience', component: Experience },
  { path: 'skills', component: Skills },
  { path: 'projects', component: Projects },
  { path: 'education', component: Education },
  { path: 'certifications', component: Certifications },
  { path: 'achievements', component: Achievements },
  { path: 'interests', component: Interests },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: 'about' }
];
