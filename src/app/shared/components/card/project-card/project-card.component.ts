import { Component } from '@angular/core';
import { BadgeComponent } from '../../badge/badge.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [BadgeComponent, RouterLink,],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {
  public technologies: string[] = ['Java', 'Spring Boot', 'Angular'];
}
