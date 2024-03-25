import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDoctor } from '../Models/doctor';
import { environment } from '../../environments/environment.development';
import { IPatient } from '../Models/patient';

@Injectable({
  providedIn: 'root',
})
export class PatientsService {
  options;
  constructor(private http: HttpClient) {
    this.options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }
  getAllPatients(): Observable<IPatient[]> {
    return this.http.get<IPatient[]>(`${environment.baseUrl}/patients`);
  }
  addPatient(patient: IPatient): Observable<any> {
    console.log(patient);
    return this.http.post<any>(
      `${environment.baseUrl}/patients`,
      JSON.stringify(patient),
      this.options
    );
  }
  updatePatient(patient: IPatient) {
    return this.http.put(
      `${environment.baseUrl}/patients/${patient.id}`,
      JSON.stringify(patient),
      this.options
    );
  }
  deletePatient(id: number) {
    return this.http.delete(`${environment.baseUrl}/patients/${id}`);
  }
  getPatientById(id: any) {
    const url = `${environment.baseUrl}/patients?id=${id}`;
    return this.http.get<any>(url);
  }
  getPatientAppointments(patientId: string) {
    const url = `${environment.baseUrl}/appoiments?patientId=${patientId}`;
    return this.http.get<any[]>(url);
  }
}
