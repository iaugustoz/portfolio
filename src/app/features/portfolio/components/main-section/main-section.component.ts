import { Component } from '@angular/core';
import { MenuComponent } from '../../../../shared/components/menu/menu.component';

@Component({
  selector: 'app-main-section',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.css',
})
export class MainSectionComponent {}
