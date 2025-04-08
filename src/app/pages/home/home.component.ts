import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/layout/header/header.component';
import { MenuComponent } from '../../components/utils/menu/menu.component';
import { MainSectionComponent } from "../../components/layout/main-section/main-section.component";
import { CardComponent } from "../../components/utils/card/card.component";
import { SkillsComponent } from "../../components/layout/skills/skills.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, MenuComponent, MainSectionComponent, CardComponent, SkillsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
