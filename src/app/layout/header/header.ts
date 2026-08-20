import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  readonly name = 'Priya S';
  readonly role = 'Frontend UI Developer / Frontend Engineer';
  readonly positioningLine =
    'I build refined user interfaces and design systems that feel precise, polished, and thoughtfully engineered.';
  readonly email = 'hello@priya.dev';
  readonly availability = 'Available for remote collaboration';
}
