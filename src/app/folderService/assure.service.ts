import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Assure}from '../class/assure'
@Injectable({
  providedIn: 'root'
})
export class AssureService {
  private baseUrl = 'http://localhost:8081/api/assures';

  constructor(private http: HttpClient) { }

  getAllAssures(): Observable<Assure[]> {
    return this.http.get<Assure[]>(`${this.baseUrl}`);
  }

  createAssure(assure: Assure): Observable<Assure> {
    return this.http.post<Assure>(`${this.baseUrl}`, assure);
  }
  updateAssure(id: number, assure: Assure): Observable<Assure> {
    return this.http.put<Assure>(`${this.baseUrl}/${id}`, assure);
  }

  deleteAssure(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  getContratsByAssureId(assureId: number): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:8083/api/contrats/assure/${assureId}`);
  }


}
