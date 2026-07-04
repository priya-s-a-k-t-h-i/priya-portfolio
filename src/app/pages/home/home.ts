import { Component } from '@angular/core';
import { Hero } from './sections/hero/hero';
import { About } from './sections/about/about';
import { Experience } from './sections/experience/experience';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, About, Experience],
  template: `
    <app-hero></app-hero>
    <app-about></app-about>
    <app-experience></app-experience>
  `,
})
export class Home {}
