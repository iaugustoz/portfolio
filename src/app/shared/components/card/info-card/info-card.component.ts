import { Component } from '@angular/core';
import { IInfo } from './interfaces/info.interface';

@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.css',
})
export class InfoCardComponent {
  public readonly cardInfo: IInfo[] = [
    {
      image: '/assets/images/fiap.jpg',
      name: 'FIAP',
      title: 'Tech Postgraduate, Software Architecture',
      period: 'Fev. 2026 - Dec. 2026',
      description: `Pretendo começar esta pós graduação ano que vem.`,
    },

    {
      image: '/assets/images/unip.png',
      name: 'Universidade Paulista',
      title: "Bachelor's Degree, Computer Science",
      period: 'Fev. 2022 - Dec. 2025',
      description: `During the course, I developed skills in programming (Java, Python,
        NodeJs), agile project management and complex problem-solving. My final
        project involved creating an application to help nutritionists guide
        their patients using AI.`,
    },
  ];
}
