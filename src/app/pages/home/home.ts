import { Component } from '@angular/core';
import { Hero } from './sections/hero/hero';
import { About } from './sections/about/about';
import { Experience } from './sections/experience/experience';
import { Skills } from './sections/skills/skills';
import { Projects } from './sections/projects/projects';
import { Awards } from './sections/awards/awards';
import { Philosophy } from './sections/philosophy/philosophy';
import { Contact } from './sections/contact/contact';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, About, Experience, Skills, Projects, Awards, Philosophy, Contact],
  template: `
    <app-hero></app-hero>
    <app-about></app-about>
    <app-experience></app-experience>
    <app-skills></app-skills>
    <app-projects></app-projects>
    <app-awards></app-awards>
    <app-philosophy></app-philosophy>
    <app-contact></app-contact>
  `,
})
export class Home {}
