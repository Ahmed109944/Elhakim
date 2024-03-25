import { Routes } from '@angular/router';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { SettingsComponent } from './component/settings/settings.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AppointmentsComponent } from './component/appointments/appointments.component';
import { DoctorsComponent } from './component/doctors/doctors.component';
import { PatientsComponent } from './component/patients/patients.component';
import { StaffComponent } from './component/staff/staff.component';
import { RecordsComponent } from './component/records/records.component';
import { PrescriptionComponent } from './component/prescription/prescription.component';
import { DoctorDashboardComponent } from './component/doctor-dashboard/doctor-dashboard.component';
import { ContactGridComponent } from './component/contact-grid/contact-grid.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', component: WelcomeComponent },
  {
    path: 'settings',
    component: SettingsComponent,
    title: 'Settings',
  },

  {
    path: 'contacts',
    component: ContactGridComponent,
    title: 'Contacts',
  },
  {
    path: 'doctordashboard',
    component: DoctorDashboardComponent,
    title: 'Doctor Dashboard',
  },
  {
    path: 'prescription/:id',
    component: PrescriptionComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'Dashboard',
  },
  {
    path: 'appointments',
    component: AppointmentsComponent,
    title: 'Appointments',
  },
  {
    path: 'doctors',
    component: DoctorsComponent,
    title: 'Doctors',
  },
  {
    path: 'patients',
    component: PatientsComponent,
    title: 'Patients',
  },
  {
    path: 'staff',
    component: StaffComponent,
    title: 'Staff',
  },
  {
    path: 'records',
    component: RecordsComponent,
    title: 'Records',
  },
];
