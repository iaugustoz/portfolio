import { Component, WritableSignal, signal } from '@angular/core';
import { MenuComponent } from '../../utils/menu/menu.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MenuComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'], // Corrigido: styleUrls no plural
})
export class HeaderComponent {
  public image: string = 'logo.jpg';
  public selectedLanguage: WritableSignal<string> = signal('pt');

  public setLanguage(language: string): void {
    this.selectedLanguage.set(language);
  }
}
