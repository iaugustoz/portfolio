import { Component } from '@angular/core';
import { SkillCardComponent } from '../../../../shared/components/card/skill-card/skill-card.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillCardComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {}
