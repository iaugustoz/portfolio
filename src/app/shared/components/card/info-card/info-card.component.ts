import { Component, Input } from '@angular/core';
import { IInfo } from './interfaces/info.interface';
import { SkillCardComponent } from '../skill-card/skill-card.component';

@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [SkillCardComponent],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.css',
})
export class InfoCardComponent {
  @Input() data!: {
    image: string;
    name: string;
    title: string;
    period: string;
    description: string;
  };
}
