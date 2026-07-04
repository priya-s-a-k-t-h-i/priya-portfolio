import { Component } from '@angular/core';
import { awards } from '@content/awards';
import { Reveal } from '@shared/reveal/reveal';

@Component({
  selector: 'app-awards',
  standalone: true,
  imports: [Reveal],
  templateUrl: './awards.html',
  styleUrl: './awards.scss',
})
export class Awards {
  protected readonly awardItems = awards.map((award, index) => ({
    ...award,
    index: String(index + 1).padStart(2, '0'),
  }));
}
