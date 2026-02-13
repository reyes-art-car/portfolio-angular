import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'home',
    title: 'Inicio | MRAC Portfolio',
    loadComponent: () =>
      import('./pages/home/home').then(m => m.Home)
  },

  {
    path: 'portfolio',
    title: 'Proyectos | MRAC Portfolio',
    loadComponent: () =>
      import('./pages/portfolio/portfolio').then(m => m.Portfolio)
  },

  {
    path: 'about',
    title: 'Sobre mí | MRAC Portfolio',
    loadComponent: () =>
      import('./pages/about/about').then(m => m.About)
  },

  {
    path: 'contact',
    title: 'Contacto | MRAC Portfolio',
    loadComponent: () =>
      import('./pages/contact/contact').then(m => m.Contact)
  },

  /* Redirects */

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }

];
