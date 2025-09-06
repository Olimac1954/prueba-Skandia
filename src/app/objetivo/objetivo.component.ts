import { Component, OnInit } from '@angular/core';
import { InformacionService } from '../services/informacion.service';
import { Card } from '../interface/objetivo';

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

productos: any[] = [];

constructor(private informacionService: InformacionService) {}
//funcion para obtener los productos de la api por medio del servicio y la interface
ngOnInit(): void {
  this.informacionService.getCards().subscribe(response => {
    this.productos = response.listCard.map(card => ({
      nombre: card.nameProduct,
      id: card.numberProduct,
      ahorro: parseInt(card.balanceProduct, 10),
      info: card.detaildProduct
    }));
    this.objetivo.actual = Math.max(
      ...response.listCard.map(card => parseInt(card.balanceProduct, 10))
    );
  });
}

// Función para obtener el color basado en el nombre del producto
getColorProducto(nombre: string): string {
  switch(nombre.toUpperCase()) {
    case 'MFUND': return '#4caf50';   // verde
    case 'CREA': return '#2196f3';    // azul
    case 'FICS': return '#ff9800';    // naranja
    case 'BOLT': return '#f44336';    // rojo
    default: return '#ccc';           // gris para cualquier otro
  }
}

//funcionalidad carrusel
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
