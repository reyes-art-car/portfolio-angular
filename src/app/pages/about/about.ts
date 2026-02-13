import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

  skills = [
    {
      icons: ['assets/images/html-5.png', 'assets/images/css-3.png'],
      title: 'HTML5 y CSS3',
      desc: 'Formularios, tablas, imágenes, vídeos, audios, mapas, navegación y layout.'
    },
    {
      icons: ['assets/images/js.png'],
      title: 'JavaScript',
      desc: 'DOM, eventos y funciones.'
    },
    {
      icons: ['assets/images/bootstrap.png'],
      title: 'Bootstrap 5',
      desc: 'Componentes, grid y diseño responsive.'
    },
    {
      icons: ['assets/images/programing.png'],
      title: 'Angular',
      desc: 'Componentes, servicios, rutas, pipes y directivas.'
    },
    {
      icons: ['assets/images/icons8-java.svg'],
      title: 'Java y Spring Boot',
      desc: 'POO, colecciones y desarrollo de APIs REST.'
    },
    {
      icons: ['assets/images/api.png'],
      title: 'Postman y APIs REST',
      desc: 'Testing y consumo de APIs.'
    },
    {
      icons: ['assets/images/icons8-oracle-logo.svg'],
      title: 'Oracle y MySQL',
      desc: 'SQL y PL/SQL.'
    },
    {
      icons: ['assets/images/git.png'],
      title: 'Git y GitHub',
      desc: 'Control de versiones y trabajo colaborativo.'
    }
  ];

}
