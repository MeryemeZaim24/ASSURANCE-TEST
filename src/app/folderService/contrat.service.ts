import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contrat } from '../class/contrat';
@Injectable({
  providedIn: 'root'
})
export class ContratService {

  private baseUrl = 'http://localhost:8083/api/contrats'; // L'URL de base de votre API

  constructor(private httpClient: HttpClient) { }

  getAllContrats(): Observable<Contrat[]> {
    return this.httpClient.get<Contrat[]>(`${this.baseUrl}`);
  }

  getContratsByAssure(assureId: number): Observable<Contrat[]> {
    return this.httpClient.get<Contrat[]>(`${this.baseUrl}/assure/${assureId}`);
  }

  createContrat(contrat: Contrat): Observable<Contrat> {
    return this.httpClient.post<Contrat>(`${this.baseUrl}`, contrat);
  }
  updateContrat(id: number, contrat: Contrat): Observable<Contrat> {
    return this.httpClient.put<Contrat>(`${this.baseUrl}/${id}`, contrat);
  }

  deleteContrat(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }
}
