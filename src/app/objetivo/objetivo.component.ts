import { Component } from '@angular/core';

@Component({
  selector: 'app-objetivo',
  templateUrl: './objetivo.component.html',
  styleUrl: './objetivo.component.css'
})
export class ObjetivoComponent {
 objetivo = {
    nombre: 'Conocer mi sobrino',
    categoria: 'Bienestar',
    fecha: 'Diciembre/2022',
    monto: 6000000,
    actual: 0
  };

  productos = [
    {
      nombre: 'FIC Efectivo',
      id: '#60000986159',
      ahorro: 2120000,
      recomendacion: 'Te recomendamos aportar $388.000 mensuales para lograrlo en diciembre del 2022.'
    },
    {
      nombre: 'FIC Efectivo',
      id: '#802300098619',
      ahorro: 7120000,
      info: '¡Súper ya tienes los $6.000.000 para tu objetivo! Úsalos cuando lo desees.'
    },
    {
      nombre: 'Seguro de vida CREA',
      id: '#710000986159',
      ahorro: 7120000,
      info: '¡Ya tienes los $6.000.000 para tu objetivo! Úsalos desde el 16/nov/27 que finaliza la vigencia de tu póliza.'
    }
  ];
}
