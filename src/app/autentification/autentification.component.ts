import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Importar FormsModule
import { MatCardModule } from '@angular/material/card';  // Importar MatCardModule
import { MatFormFieldModule } from '@angular/material/form-field';  // Importar MatFormFieldModule
import { MatInputModule } from '@angular/material/input';  // Importar MatInputModule
import { MatButtonModule } from '@angular/material/button';  // Importar MatButtonModule



@Component({
  selector: 'app-autentification',
  standalone: true,
  imports: [FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule, ],
  templateUrl: './autentification.component.html',
  styleUrl: './autentification.component.css'
})
export class AutentificationComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.username === 'Urbano' && this.password === '12345') {
      sessionStorage.setItem('user', this.username);
      this.router.navigate(['/menu']);
    } else {
      alert('Credenciales incorrectas');
    }
  }
}
