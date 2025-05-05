import { Component } from '@angular/core';
import { ProjectCardComponent } from '../../../shared/components/card/project-card/project-card.component';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.css',
})
export class ProjectsSectionComponent {}
