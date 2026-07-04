import { Component } from '@angular/core';
import { projects } from '@content/projects';
import { navigation } from '@content/navigation';
import { Reveal } from '@shared/reveal/reveal';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [Reveal],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected readonly projects = projects;
  protected readonly eyebrowLabel =
    navigation.find((item) => item.sectionId === 'projects')?.label ?? '';
}
