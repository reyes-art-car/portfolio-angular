import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../models/project.model';
import { TruncatePipe } from '../../pipes/truncate-pipe';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, TruncatePipe],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {

  @Input({ required: true })
  project!: Project;

}
