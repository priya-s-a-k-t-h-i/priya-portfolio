import { Component } from '@angular/core';
import { Hero } from './sections/hero/hero';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero],
  template: `<app-hero></app-hero>`,
})
export class Home {}
