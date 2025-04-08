import { Component } from '@angular/core';
import { CardComponent } from "../../utils/card/card.component";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

}
