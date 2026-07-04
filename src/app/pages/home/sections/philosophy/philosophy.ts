import { Component } from '@angular/core';
import { philosophy } from '@content/philosophy';
import { Reveal } from '@shared/reveal/reveal';

@Component({
  selector: 'app-philosophy',
  standalone: true,
  imports: [Reveal],
  templateUrl: './philosophy.html',
  styleUrl: './philosophy.scss',
})
export class Philosophy {
  protected readonly philosophy = philosophy;
}
