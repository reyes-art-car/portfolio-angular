import { Component } from '@angular/core';
import { Project } from '../../models/project.model';
import { TruncatePipe } from '../../pipes/truncate-pipe';


@Component({
  selector: 'app-project-card',
imports: [TruncatePipe],
templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  project!: Project;
}
