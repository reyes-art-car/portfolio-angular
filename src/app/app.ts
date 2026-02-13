import { Component } from '@angular/core';
import { ThemeService } from './services/theme';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  constructor(private theme: ThemeService) {
    this.theme.init();
  }
}

