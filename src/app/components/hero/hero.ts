import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class HeroComponent {

  technologies = [
    'Angular',
    'TypeScript',
    'RxJS',
    'NgRx',
    'SCSS'
  ];

}