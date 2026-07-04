import { Component } from '@angular/core';
import { skills } from '@content/skills';
import { navigation } from '@content/navigation';
import { Reveal } from '@shared/reveal/reveal';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [Reveal],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  protected readonly skills = skills;
  protected readonly eyebrowLabel =
    navigation.find((item) => item.sectionId === 'skills')?.label ?? '';
}
