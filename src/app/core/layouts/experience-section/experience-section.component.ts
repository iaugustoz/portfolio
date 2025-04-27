import { Component } from '@angular/core';
import jsonData from '../../../../assets/data/card-experience.json';
import { InfoCardComponent } from '../../../shared/components/card/info-card/info-card.component';

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [InfoCardComponent],
  templateUrl: './experience-section.component.html',
  styleUrl: './experience-section.component.css',
})
export class ExperienceSectionComponent {
  public PATH_JSON: string = '/assets/data/card-experience.json';
  public cardExperience: any[] = jsonData.experience;
}
