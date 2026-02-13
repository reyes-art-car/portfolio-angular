import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCard } from '../../components/project-card/project-card';
import { Project } from '../../models/project.model';
import { TranslateService } from '../../services/translate.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, ProjectCard],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {
  t= inject(TranslateService);

  projects: Project[] = [
    {
      id: 1,
      title: 'ChefPro',
      description:
        'Plataforma full-stack para reserva de menús y servicios de chefs. Backend en Spring Boot y frontend en Angular con APIs REST. Me encargué de la parte de back y API REST.',
      imageUrl: 'assets/images/api.png',
      tags: ['Angular', 'Spring Boot', 'REST'],
      link: 'https://github.com/varelaiglesiascarmen/ChefPro',
    },

    {
      id: 2,
      title: 'Aetas Historia',
      description:
        'Aplicación Java con Swing para crear, editar y eliminar documentos históricos. En este proyecto me encargué de la parte de Java.',
      imageUrl: 'assets/images/icons8-java.svg',
      tags: ['Java', 'Swing'],
      link: 'https://github.com/reyes-art-car/aetas-historia',
    },

    {
      id: 3,
      title: 'NCT España',
      description:
        'Aplicación web para la fanbase de NCT en España desarrollada con HTML y CSS. Proyecto desarrollado completamente por mí.',
      imageUrl: 'assets/images/html-5.png',
      tags: ['HTML', 'CSS'],
      link: 'https://github.com/reyes-art-car/nct-espana.es',
    }
  ];

  trackById(_: number, p: Project) {
    return p.id;
  }

}
