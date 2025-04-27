import { Component, Input } from '@angular/core';
import socialMediaJson from '../../../../assets/data/card-social-media.json';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.css',
})
export class ContactSectionComponent {
  public json: any[] = socialMediaJson['social-media'];
}
