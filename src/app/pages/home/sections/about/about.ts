import { Component } from '@angular/core';
import { about } from '@content/about';
import { Reveal } from '@shared/reveal/reveal';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [Reveal],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly about = about;
}
