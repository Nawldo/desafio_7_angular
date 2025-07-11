// src/app/shared/vehicle.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Importação correta de interfaces
import { Veiculo, VehicleData } from '@models/veiculo.model';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  private readonly apiUrl = 'http://localhost:3000'; // URL base da API

  constructor(private http: HttpClient) {}

  /**
   * Busca a lista completa de veículos.
   * A API retorna um array de objetos Veiculo na rota /vehicles.
   */
  getVehicles(): Observable<Veiculo[]> {
    return this.http.get<Veiculo[]>(`${this.apiUrl}/vehicles`);
  }

  /**
   * Busca dados detalhados de um veículo pelo VIN.
   * A API espera um POST para /vehicleData com o VIN no corpo.
   * @param vin VIN do veículo (Vehicle Identification Number).
   */
  getVehicleDataByVin(vin: string): Observable<VehicleData> {
    return this.http.post<VehicleData>(`${this.apiUrl}/vehicleData`, { vin });
  }

  // Método de busca por modelo removido: a filtragem agora ocorre no DashboardComponent.
  // Se for necessário no backend futuramente, esse seria o local para implementá-lo.
}
