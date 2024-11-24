import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgIf],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  public isMenuOpen: boolean = false;

  public toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
