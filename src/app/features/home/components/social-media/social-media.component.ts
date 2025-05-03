import { Component } from '@angular/core';
import socialMediaJson from '../../../../../assets/data/card-social-media.json';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.css',
  animations: [
    trigger('move', [
      state('move-left', style({ transform: 'translate(0px)' })),
      state('move-right', style({ transform: 'translate(20px)' })),
      transition('move-left <=> move-right', animate('0.4s')),
    ]),
  ],
})
export class SocialMediaComponent {
  public json: any[] = socialMediaJson['social-media'];
  public activeStates: boolean[] = [];

  setActive(index: number, value: boolean) {
    this.activeStates[index] = value;
  }

  isActive(index: number): boolean {
    return this.activeStates[index] === true;
  }
}
