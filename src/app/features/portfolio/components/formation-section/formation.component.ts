import { Component } from '@angular/core';
import { InfoCardComponent } from "../../../../shared/components/card/info-card/info-card.component";

@Component({
  selector: 'app-formation',
  standalone: true,
  imports: [InfoCardComponent],
  templateUrl: './formation.component.html',
  styleUrl: './formation.component.css'
})
export class FormationComponent {

}
