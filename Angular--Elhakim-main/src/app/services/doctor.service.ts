import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDoctor } from '../Models/doctor';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  options;
  constructor(private http: HttpClient) {
    this.options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }
  getAllDoctors(): Observable<IDoctor[]> {
    return this.http.get<IDoctor[]>(`${environment.baseUrl}/doctors`);
  }
  addDoctor(doctor: IDoctor): Observable<any> {
    console.log(doctor);
    return this.http.post<any>(
      `${environment.baseUrl}/doctors`,
      JSON.stringify(doctor),
      this.options
    );
  }
  updateDoctor(doctor: IDoctor) {
    return this.http.put(
      `${environment.baseUrl}/doctors/${doctor.id}`,
      JSON.stringify(doctor),
      this.options
    );
  }
  deleteDoctor(id: number) {
    return this.http.delete(`${environment.baseUrl}/doctors/${id}`);
  }
}
