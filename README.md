# Portfolio Angular — María Reyes Artacho Carrero

## Objetivo
Portfolio profesional desarrollado en Angular como proyecto DAW.

## Tecnologías
- Angular
- TypeScript
- Bootstrap
- Routing
- Standalone components
## Estructura del proyecto

```text
portfolio-angular/
├─ public/
│  └─ favicon.ico
├─ src/
│  ├─ app/
│  │  ├─ components/
│  │  │  └─ project-card/
│  │  │     ├─ project-card.ts
│  │  │     ├─ project-card.html
│  │  │     └─ project-card.css
│  │  ├─ models/
│  │  │  └─ project.model.ts
│  │  ├─ pages/
│  │  │  ├─ home/
│  │  │  ├─ about/
│  │  │  ├─ contact/
│  │  │  └─ portfolio/
│  │  ├─ pipes/
│  │  │  └─ truncate-pipe.ts
│  │  ├─ services/
│  │  │  └─ portfolio.service.ts
│  │  ├─ shared/
│  │  │  ├─ navbar/
│  │  │  └─ footer/
│  │  ├─ app.config.ts
│  │  ├─ app.routes.ts
│  │  ├─ app.html
│  │  ├─ app.css
│  │  └─ app.ts
│  ├─ assets/
│  │  ├─ doc/
│  │  ├─ images/
│  │  └─ video/
│  ├─ index.html
│  ├─ main.ts
│  └─ styles.css
├─ package.json
```

##  Arquitectura

El proyecto está organizado por responsabilidades:

- **pages/** → vistas principales (Home, About, Contact, Portfolio)
- **components/** → componentes reutilizables
- **shared/** → elementos de layout comunes (navbar, footer)
- **services/** → acceso a datos de proyectos
- **models/** → tipado de datos
- **pipes/** → transformaciones de texto


## Funcionalidades
- Sección formación
- Sección proyectos
- Descarga de CV
- Formulario de contacto validado
- Diseño responsive

## Cómo ejecutar
- npm install
- ng serve

## Autora
María Reyes Artacho Carrero



For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
