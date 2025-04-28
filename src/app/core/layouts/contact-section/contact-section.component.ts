import { Component, Input } from '@angular/core';
import { SocialMediaComponent } from '../../../features/home/components/social-media/social-media.component';
import { ContactFormComponent } from "../../../features/home/components/contact-form/contact-form.component";

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [SocialMediaComponent, ContactFormComponent],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.css',
})
export class ContactSectionComponent {}
