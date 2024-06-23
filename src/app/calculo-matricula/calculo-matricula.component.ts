import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculo-matricula',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './calculo-matricula.component.html',
  styleUrls: ['./calculo-matricula.component.css']
})
export class CalculoMatriculaComponent {
  numMaterias: number = 0;
  costoMateria: number = 520;
  total: number | null = null;

  calcularMatricula() {
    let total = this.numMaterias * this.costoMateria;
    if (this.numMaterias > 5) {
      total = total * 0.9;  // Aplica su respectivo dsto descuento del 10%
    }
    this.total = total;
  }
}
