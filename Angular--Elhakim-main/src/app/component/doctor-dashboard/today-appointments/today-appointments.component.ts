import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AppointmentsService } from '../../../services/appointments.service';

import { Router, RouterModule } from '@angular/router';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { PatientsService } from '../../../services/patient.service';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-today-appointments',
  standalone: true,
  imports: [RouterModule, NzModalModule, NzButtonModule, NzIconModule],
  templateUrl: './today-appointments.component.html',
  styleUrl: './today-appointments.component.scss',
})
export class TodayAppointmentsComponent implements OnInit {
  isVisible = false;

  appointmentData: any;

  showModal(item: any): void {
    this.isVisible = true;
    this.appointmentData = item;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  openModal() {
    const modalDiv: any = document.getElementById('exampleModal');
    if (modalDiv != null) {
      modalDiv.style.display = 'block';
    }
  }
  closeModal() {
    const modalDiv: any = document.getElementById('exampleModal');
    if (modalDiv != null) {
      modalDiv.style.display = 'none';
    }
  }
  navigateToTarget(id: any) {
    this.router.navigate(['/prescription', id]);
  }

  todayAppointments: any[] = [];
  constructor(
    private appointmentService: AppointmentsService,
    private router: Router,
    private patientSRV: PatientsService
  ) {}
  pdfUrl = '';

  getLastVisitDateBeforeToday(arr: any) {
    const visitsArray = arr;
    if (visitsArray.length === 0) {
      return null; // Return null if array is empty
    }

    const today = new Date(); // Get today's date

    let lastVisitDate = null;

    for (let i = 0; i < visitsArray.length; i++) {
      const currentDate = new Date(visitsArray[i].date);
      if (
        this.isBefore(currentDate, today) &&
        (lastVisitDate === null || this.isAfter(currentDate, lastVisitDate))
      ) {
        lastVisitDate = currentDate;
      }
    }

    return lastVisitDate ? this.formatDate(lastVisitDate) : 'first visit';
  }

  isBefore(date1: any, date2: any) {
    return (
      date1.getFullYear() < date2.getFullYear() ||
      (date1.getFullYear() === date2.getFullYear() &&
        (date1.getMonth() < date2.getMonth() ||
          (date1.getMonth() === date2.getMonth() &&
            date1.getDate() < date2.getDate())))
    );
  }

  isAfter(date1: any, date2: any) {
    return (
      date1.getFullYear() > date2.getFullYear() ||
      (date1.getFullYear() === date2.getFullYear() &&
        (date1.getMonth() > date2.getMonth() ||
          (date1.getMonth() === date2.getMonth() &&
            date1.getDate() > date2.getDate())))
    );
  }

  formatDate(date: any) {
    return date.toISOString().split('T')[0];
  }

  getTodayAppointmentsAndItsLastVisits() {
    this.appointmentService.getTodayAppointments().subscribe((appointments) => {
      appointments.forEach((appointment) => {
        console.log('appointment ', appointment);
        const patientId = appointment.patientId;

        this.patientSRV
          .getPatientAppointments(patientId)
          .subscribe((appointments) => {
            const lastVisit = this.getLastVisitDateBeforeToday(appointments);
            this.todayAppointments.push({ lastVisit, appointment });
          });
      });
    });
  }

  ngOnInit(): void {
    this.getTodayAppointmentsAndItsLastVisits();
    console.log(this.todayAppointments);
  }
}
