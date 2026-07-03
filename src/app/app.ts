import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero';
import { NavbarComponent } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    HeroComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}