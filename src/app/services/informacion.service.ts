import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../interface/objetivo';

@Injectable({
  providedIn: 'root'
})
// Servicio Angular para obtener información de la API
export class InformacionService {

  // URL de la API desde donde se obtendrán las tarjetas
  private apiUrl = 'https://62e152f8fa99731d75d44571.mockapi.io/api/v1/test-front-end-skandia/cards';

  // Inyección del HttpClient para hacer peticiones HTTP
  constructor(private http: HttpClient) { }

  // Método para obtener las tarjetas desde la API
  // Devuelve un Observable que emite un ApiResponse
  getCards(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiUrl);
  }
}

