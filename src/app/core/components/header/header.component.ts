import { Component, WritableSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../../../shared/components/menu/menu.component';

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
