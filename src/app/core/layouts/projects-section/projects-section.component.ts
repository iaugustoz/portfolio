import { Component } from '@angular/core';
import { BadgeComponent } from '../../../shared/components/badge/badge.component';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [BadgeComponent],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.css',
})
export class ProjectsSectionComponent {
  public technologies: string[] = ['Java', 'Spring Boot', 'Angular'];
}
