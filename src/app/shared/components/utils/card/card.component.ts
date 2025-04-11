import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

interface IStack {
  technology: string;
  path: string;
}

interface ICard {
  title: string;
  stack: IStack[];
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgFor],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  private readonly PATH_CHECK_ICON = 'assets/images/check.svg';
  private readonly PATH_UNCHECK_ICON = 'assets/images/uncheck.svg';

  private readonly frontendCard: IStack[] = [
    { technology: 'Angular', path: this.PATH_CHECK_ICON },
    { technology: 'Tailwind', path: this.PATH_CHECK_ICON },
    { technology: 'TS', path: this.PATH_CHECK_ICON },
    { technology: 'NgRx', path: this.PATH_UNCHECK_ICON },
    { technology: 'Jasmine', path: this.PATH_UNCHECK_ICON },
    { technology: 'RxJS', path: this.PATH_UNCHECK_ICON },
  ];

  private readonly backendCard: IStack[] = [
    { technology: 'Java 8+', path: this.PATH_CHECK_ICON },
    { technology: 'Kafka', path: this.PATH_CHECK_ICON },
    { technology: 'Docker', path: this.PATH_CHECK_ICON },
    { technology: 'Spring Boot', path: this.PATH_CHECK_ICON },
    { technology: 'JUnit', path: this.PATH_CHECK_ICON },
  ];

  private readonly architectureCard: IStack[] = [
    { technology: 'RESTful', path: this.PATH_CHECK_ICON },
    { technology: 'SOLID', path: this.PATH_CHECK_ICON },
    { technology: 'MSA', path: this.PATH_CHECK_ICON },
    { technology: 'Patterns', path: this.PATH_CHECK_ICON },
  ];

  private readonly databaseCard: IStack[] = [
    { technology: 'Python', path: this.PATH_CHECK_ICON },
    { technology: 'BigQuery', path: this.PATH_CHECK_ICON },
    { technology: 'Oracle', path: this.PATH_CHECK_ICON },
    { technology: 'Firestore', path: this.PATH_CHECK_ICON },
    { technology: 'MySQL', path: this.PATH_CHECK_ICON },
    { technology: 'MongoDB', path: this.PATH_UNCHECK_ICON },
  ];

  private readonly cloudCard: IStack[] = [
    {
      technology: 'GCP',
      path: this.PATH_CHECK_ICON,
    },
    { technology: 'AWS', path: this.PATH_UNCHECK_ICON },
    { technology: 'Azure', path: this.PATH_UNCHECK_ICON },
  ];

  private readonly othersCard: IStack[] = [
    { technology: 'OpenShift', path: this.PATH_CHECK_ICON },
    { technology: 'SonarQube', path: this.PATH_CHECK_ICON },
    { technology: 'K8S', path: this.PATH_UNCHECK_ICON},
  ];

  public readonly cards: ICard[] = [
    { title: 'Front-End', stack: this.frontendCard },
    { title: 'Back-End', stack: this.backendCard },
    { title: 'Architecture', stack: this.architectureCard },
    { title: 'Data persistence', stack: this.databaseCard },
    { title: 'Cloud', stack: this.cloudCard },
    { title: 'Others', stack: this.othersCard },
  ];
}
