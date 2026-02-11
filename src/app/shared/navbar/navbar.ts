import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Theme, ThemeService } from '../../services/theme';


@Component({
  standalone: true,
  selector: 'app-navbar',
imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  theme: Theme = 'light';

  constructor(private themeService: ThemeService) {
    this.theme = this.themeService.init();
  }

  toggleTheme(): void {
    this.theme = this.themeService.toggle(this.theme);
  }
}

