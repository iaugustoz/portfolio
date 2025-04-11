import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/layout/header/header.component';
import { MenuComponent } from '../../shared/components/utils/menu/menu.component';
import { MainSectionComponent } from '../../shared/components/layout/main-section/main-section.component';
import { CardComponent } from '../../shared/components/utils/card/card.component';
import { SkillsComponent } from '../../shared/components/layout/skills/skills.component';
import { FormationComponent } from '../../shared/components/layout/formation/formation.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    MenuComponent,
    MainSectionComponent,
    CardComponent,
    SkillsComponent,
    FormationComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
