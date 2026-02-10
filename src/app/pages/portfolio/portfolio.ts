import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

import { PortfolioService } from '../../services/portfolio';
import { Project } from '../../models/project.model';
import { ProjectCard } from '../../components/project-card/project-card';

@Component({
  standalone: true,
  imports: [NgFor, NgIf, ProjectCard],
  templateUrl: './portfolio.html'
})
export class Portfolio {

  projects: Project[] = [];

  constructor(private portfolioService: PortfolioService) {
    this.projects = this.portfolioService.getProjects();
  }

}
