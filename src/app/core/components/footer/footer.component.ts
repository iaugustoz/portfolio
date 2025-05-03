import { Component } from '@angular/core';
import footerJson from '../../../../assets/data/footer.json';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  public jsonSocialMedia: any[] = footerJson['footer-social-media'];
  public jsonFooterSections: any[] = footerJson['footer-sections'];
}
