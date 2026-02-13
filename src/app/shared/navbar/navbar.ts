import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../services/theme';
import { TranslateService } from '../../services/translate.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  t = inject(TranslateService);
  private theme = inject(ThemeService);

  links = [
    { label: 'Inicio', path: '/', exact: true },
    { label: 'Proyectos', path: '/portfolio', exact: false },
    { label: 'Sobre mí', path: '/about', exact: false },
    { label: 'Contacto', path: '/contact', exact: false }
  ];

  trackByPath(_: number, item: any) {
    return item.path;
  }

  toggleTheme() {
    this.theme.toggle();
  }
}
