import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PatientsService } from '../../services/patient.service';
import { AppointmentsService } from '../../services/appointments.service';
@Component({
  selector: 'app-prescription',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './prescription.component.html',
  styleUrl: './prescription.component.scss',
})
export class PrescriptionComponent implements OnInit {
  id: any;
  constructor(
    private route: ActivatedRoute,
    private patientSRV: PatientsService,
    private AppoiSRV: AppointmentsService
  ) {}
  prescription: any;

  calculateAge(birthDateString: string) {
    const birthDate = new Date(birthDateString);
    const currentDate = new Date();

    let age = currentDate.getFullYear() - birthDate.getFullYear();

    // Check if the current date has not yet reached the birth date in the current year
    if (
      currentDate.getMonth() < birthDate.getMonth() ||
      (currentDate.getMonth() === birthDate.getMonth() &&
        currentDate.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  }
  getPrescriptionData(AppointmentId: any) {
    this.AppoiSRV.getAppointmentById(AppointmentId).subscribe((appointment) => {
      this.prescription = appointment;
      console.log(appointment);
    });
  }
  patientAge: any;
  getPatientData(patientId: any) {
    this.patientSRV.getPatientById(patientId).subscribe((patient) => {
      console.log(patient);
      this.prescription.patientAge = Number(
        this.calculateAge(patient[0].dateOfBirth)
      );
    });
  }
  generatePDF() {
    const loader = document.getElementById('loader');

    const elementToPrint: any = document.getElementById('prescription');
    if (!elementToPrint) {
      console.error("Element with ID 'prescription' not found.");
      return;
    }
    loader!.style.display = 'inline';
    console.log(elementToPrint);
    if (!elementToPrint) {
      console.error("Element with ID 'prescription' not found.");
      return;
    }
    html2canvas(elementToPrint, { scale: 3 })
      .then((canvas) => {
        const pdf = new jsPDF('p', 'mm', 'a4');
        const aspectRatio = canvas.height / canvas.width;

        // Calculate the width and height of the PDF page based on the canvas size
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdfWidth * aspectRatio;
        pdf.addImage(
          canvas.toDataURL('image/png'),
          'PNG',
          0,
          0,
          pdfWidth,
          pdfHeight
        );
        pdf.setProperties({
          title: 'prescription',
          subject: 'Patient Prescription',
          author: 'Ammar Ahmed ElHakim',
        });

        pdf.save('prescription.pdf');
        loader!.style.display = 'none';
      })
      .catch((error) => {
        console.error('Error generating PDF:', error);
        loader!.style.display = 'none';
      });
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });

    this.getPrescriptionData(this.id);
    this.getPatientData(1);
  }
}
