import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

type NavLink = {
  path: string;
  label: string;
  exact?: boolean;
};

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  links: NavLink[] = [
    { path: '/', label: 'Inicio', exact: true },
    { path: '/about', label: 'Sobre mí' },
    { path: '/portfolio', label: 'Proyectos' },
    { path: '/contact', label: 'Contacto' },
  ];

  trackByPath(_: number, item: NavLink) {
    return item.path;
  }
}
