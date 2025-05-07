import { Component } from '@angular/core';
import { BadgeComponent } from '../../badge/badge.component';
import { RouterLink } from '@angular/router';
import json from '../../../../../assets/data/projects.json';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [BadgeComponent, RouterLink],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {
  data = json.projects;
  selectedIndex = 0;
  
  selectProject(index: number) {
    this.selectedIndex = index;
  }
}
