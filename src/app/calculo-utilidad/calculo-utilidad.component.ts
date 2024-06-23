import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculo-utilidad',
  standalone: true,
  imports: [FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule],
  templateUrl: './calculo-utilidad.component.html',
  styleUrl: './calculo-utilidad.component.css'
})
export class CalculoUtilidadComponent {
  salario: number = 0;
  anios: number = 0;
  utilidad: number | null = null;

  calcularUtilidad() {
    if (this.anios < 1) {
      this.utilidad = this.salario * 0.05;
    } else if (this.anios >= 1 && this.anios < 2) {
      this.utilidad = this.salario * 0.07;
    } else if (this.anios >= 2 && this.anios < 5) {
      this.utilidad = this.salario * 0.10;
    } else if (this.anios >= 5 && this.anios < 10) {
      this.utilidad = this.salario * 0.15;
    } else {
      this.utilidad = this.salario * 0.20;
    }
  }
}
