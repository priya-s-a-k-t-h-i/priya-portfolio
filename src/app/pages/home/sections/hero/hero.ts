import { Component } from '@angular/core';
import { hero } from '@content/hero';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  protected readonly hero = hero;
  protected readonly primaryHref = `#${hero.primaryCta.target}`;
}
