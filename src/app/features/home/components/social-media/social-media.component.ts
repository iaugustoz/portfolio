import { Component } from '@angular/core';
import socialMediaJson from '../../../../../assets/data/card-social-media.json';

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.css',
})
export class SocialMediaComponent {
  public json: any[] = socialMediaJson['social-media'];
}
