import { Component } from '@angular/core';
import { MaterialModule } from '../angular-material/material/material.module';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MaterialModule,RouterModule,
    MatToolbarModule,
    MatListModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
