import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/layout/header/header.component';
import { MenuComponent } from '../../components/utils/menu/menu.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, MenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
