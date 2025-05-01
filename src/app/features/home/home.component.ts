import { Component } from '@angular/core';
import { MenuComponent } from '../../shared/components/menu/menu.component';
import { SkillCardComponent } from '../../shared/components/card/skill-card/skill-card.component';
import { ContactSectionComponent } from '../../core/layouts/contact-section/contact-section.component';
import { HeaderComponent } from '../../core/components/header/header.component';
import { MainSectionComponent } from '../../core/layouts/main-section/main-section.component';
import { SkillsComponent } from '../../core/layouts/skills-section/skills.component';
import { FormationComponent } from '../../core/layouts/formation-section/formation.component';
import { ExperienceSectionComponent } from '../../core/layouts/experience-section/experience-section.component';
import { ProjectsSectionComponent } from '../../core/layouts/projects-section/projects-section.component';
import { FooterComponent } from "../../core/components/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    MenuComponent,
    MainSectionComponent,
    SkillCardComponent,
    SkillsComponent,
    FormationComponent,
    ExperienceSectionComponent,
    ProjectsSectionComponent,
    ContactSectionComponent,
    FooterComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
