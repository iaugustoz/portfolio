import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/layout/header/header.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {

}
