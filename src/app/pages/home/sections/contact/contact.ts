import { Component } from '@angular/core';
import { contact } from '@content/contact';
import { Reveal } from '@shared/reveal/reveal';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [Reveal],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly contact = contact;
}
