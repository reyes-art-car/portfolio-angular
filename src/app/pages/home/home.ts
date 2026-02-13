import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PortfolioService } from '../../services/portfolio.service';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  private readonly portfolioService = inject(PortfolioService);

  projects: Project[] =
    this.portfolioService.getProjects().slice(0, 3);

  trackById(_: number, p: Project) {
    return p.id;
  }
}
