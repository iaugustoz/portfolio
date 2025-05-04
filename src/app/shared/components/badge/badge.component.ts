import { Component, Input } from '@angular/core';
import { upAnimation } from '../../../core/animations/up.animations';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.css',
  animations: [upAnimation],
})
export class BadgeComponent {
  @Input() text!: string;

  public isActive: boolean = false;

  setActive(value: boolean) {
    this.isActive = value;
  }
}
