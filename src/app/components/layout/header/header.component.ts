import { Component } from '@angular/core';
import { MenuComponent } from '../../utils/menu/menu.component';
import { CloseMenuComponent } from "../../utils/close-menu/close-menu.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenuComponent, CloseMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
