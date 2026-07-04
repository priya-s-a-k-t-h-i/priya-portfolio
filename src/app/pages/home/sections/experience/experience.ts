import { Component } from '@angular/core';
import { experience } from '@content/experience';
import { navigation } from '@content/navigation';
import { Reveal } from '@shared/reveal/reveal';

function formatRange(startDate: string, endDate: string | null): string {
  if (!startDate) {
    return '';
  }
  return `${startDate} – ${endDate ?? 'Present'}`;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [Reveal],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  protected readonly eyebrowLabel =
    navigation.find((item) => item.sectionId === 'experience')?.label ?? '';

  protected readonly entries = experience.map((entry) => ({
    ...entry,
    dateRange: formatRange(entry.startDate, entry.endDate),
    stages: entry.stages.map((stage) => ({
      ...stage,
      dateRange: formatRange(stage.startDate, stage.endDate),
    })),
  }));
}
