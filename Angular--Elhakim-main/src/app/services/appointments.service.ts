import { Injectable } from '@angular/core';
import { Iappointement } from '../Models/appointement';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AppointmentsService {
  options;
  constructor(private http: HttpClient) {
    this.options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }

  getAllAppointements(): Observable<Iappointement[]> {
    return this.http.get<Iappointement[]>(`${environment.baseUrl}/appoiments`);
  }

  addAppointement(appointement: Iappointement): Observable<any> {
    console.log(appointement);
    return this.http.post<any>(
      `${environment.baseUrl}/appoiments`,
      JSON.stringify(appointement),
      this.options
    );
  }
  updateAppointement(appointement: Iappointement) {
    return this.http.put(
      `${environment.baseUrl}/appoiments/${appointement.id}`,
      JSON.stringify(appointement),
      this.options
    );
  }
  deleteAppointement(id: number) {
    return this.http.delete(`${environment.baseUrl}/appoiments/${id}`);
  }
  getAppointmentById(id: any) {
    const url = `${environment.baseUrl}/appoiments?id=${id}`;
    return this.http.get<any>(url);
  }
  getTodayAppointments(): Observable<any[]> {
    const today = new Date().toISOString().split('T')[0];
    const url = `${environment.baseUrl}/appoiments?date=${today}`;
    return this.http.get<any[]>(url);
  }
}
