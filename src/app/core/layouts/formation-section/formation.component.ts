import { Component } from '@angular/core';
import { InfoCardComponent } from '../../../shared/components/card/info-card/info-card.component';
import jsonData from '../../../../assets/data/card-formation.json';

@Component({
  selector: 'app-formation',
  standalone: true,
  imports: [InfoCardComponent],
  templateUrl: './formation.component.html',
  styleUrl: './formation.component.css',
})
export class FormationComponent {
  public PATH_JSON: string = 'assets/data/card-formation.json';
  public cardFormation: any[] = jsonData.formation;
}
