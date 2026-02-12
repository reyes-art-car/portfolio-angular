import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  getProjects(): Project[] {
    return [
      {
        id: 1,
        title: 'Portfolio Bootstrap',
        description: 'Primer portfolio realizado con Bootstrap.',
        imageUrl: 'assets/img/p1.jpg',
        repoUrl: 'https://github.com/reyes-art-car/proyecto-portfolio',
        tags: ['Bootstrap', 'HTML', 'CSS']
      },
      {
        id: 2
        ,
        title: 'Portfolio Angular',
        description: 'Migración a SPA con Angular y routing.',
        imageUrl: 'assets/img/p2.jpg',
        repoUrl: 'https://github.com/reyes-art-car/portfolio-angular',
        tags: ['Angular', 'TypeScript'],
      }
    ];
  }

}
