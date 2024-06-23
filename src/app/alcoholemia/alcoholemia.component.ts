import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-alcoholemia',
  templateUrl: './alcoholemia.component.html',
  styleUrls: ['./alcoholemia.component.css'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
})
export class AlcoholemiaComponent {
  alcoholForm: FormGroup;
  resultado: string = '';

  vehiculos = [
    { tipo: 'C', nombre: 'Camión', tasa: 0.3 },
    { tipo: 'A', nombre: 'Autobús', tasa: 0.3 },
    { tipo: 'T', nombre: 'Turismo', tasa: 0.5 },
    { tipo: 'M', nombre: 'Motocicleta', tasa: 0.3 }
  ];

  constructor(private fb: FormBuilder) {
    this.alcoholForm = this.fb.group({
      tipoVehiculo: ['', Validators.required],
      tasaAlcohol: ['', [Validators.required, Validators.min(0)]]
    });
  }

  comprobar() {
    if (this.alcoholForm.valid) {
      const vehiculo = this.vehiculos.find(v => v.tipo === this.alcoholForm.value.tipoVehiculo);
      if (vehiculo) {
        if (this.alcoholForm.value.tasaAlcohol > vehiculo.tasa) {
          this.resultado = `Positivo. La tasa de ${this.alcoholForm.value.tasaAlcohol} supera el límite de ${vehiculo.tasa} para ${vehiculo.nombre}.`;
        } else {
          this.resultado = `Negativo. La tasa de ${this.alcoholForm.value.tasaAlcohol} está dentro del límite de ${vehiculo.tasa} para ${vehiculo.nombre}.`;