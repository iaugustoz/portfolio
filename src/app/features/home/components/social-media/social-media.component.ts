import { Component } from '@angular/core';
import socialMediaJson from '../../../../../assets/data/card-social-media.json';
import { moveAnimation } from '../../../../core/animations/move.animation';

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.css',
  animations: [moveAnimation],
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
