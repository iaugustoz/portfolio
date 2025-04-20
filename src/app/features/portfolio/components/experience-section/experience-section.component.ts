import { Component } from '@angular/core';
import { InfoCardComponent } from '../../../../shared/components/card/info-card/info-card.component';
import jsonData from '../../../../../assets/data/card-experience.json';

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
