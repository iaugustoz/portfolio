import { Component } from '@angular/core';
import { HeaderComponent } from './components/header-section/header.component';
import { MenuComponent } from '../../shared/components/menu/menu.component';
import { MainSectionComponent } from './components/main-section/main-section.component';
import { SkillsComponent } from './components/skills-section/skills.component';
import { FormationComponent } from './components/formation-section/formation.component';
import { SkillCardComponent } from '../../shared/components/card/skill-card/skill-card.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    HeaderComponent,
    MenuComponent,
    MainSectionComponent,
    SkillCardComponent,
    SkillsComponent,
    FormationComponent,
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {}
