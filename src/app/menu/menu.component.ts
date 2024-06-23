import { Component } from '@angular/core';
import { MaterialModule } from '../angular-material/material/material.module';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
