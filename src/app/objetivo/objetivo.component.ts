import { Component, ViewChild, ElementRef } from '@angular/core';

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
      nombre: 'MFUND',
      id: '789654123',
      ahorro: 4000000,
      info: 'Ya tienes un 15% de tu objetivo'
    },
    {
      nombre: 'Seguro de vida CREA',
      id: '#710000986159',
      ahorro: 7120000,
      info: '¡Ya tienes los $6.000.000 para tu objetivo! Úsalos desde el 16/nov/27 que finaliza la vigencia de tu póliza.'
    },
    
  ];

posicion = 0;

moverCarrusel(direccion: 'prev' | 'next') {
  const carrusel = document.getElementById('carrusel');
  if (!carrusel) return;

  const tarjetas = Array.from(carrusel.getElementsByClassName('producto-card')) as HTMLElement[];
  if (tarjetas.length === 0) return;

  // ancho real de la tarjeta + gap
  const gap = 20; // coincide con tu CSS
  const tarjetaWidth = tarjetas[0].offsetWidth + gap;

  // cuántas tarjetas caben visibles en el wrapper
  const wrapperWidth = carrusel.offsetWidth;
  const visibleCards = Math.floor(wrapperWidth / tarjetaWidth);

  // límite máximo de scroll
  const maxOffset = -(tarjetas.length - visibleCards) * tarjetaWidth;

  // mover el carrusel
  this.posicion += direccion === 'prev' ? tarjetaWidth * visibleCards : -tarjetaWidth * visibleCards;

  // limitar scroll
  this.posicion = Math.min(0, Math.max(this.posicion, maxOffset));

  carrusel.style.transform = `translateX(${this.posicion}px)`;
}




}
