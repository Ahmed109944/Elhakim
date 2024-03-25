import { Component } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { appointments } from './appointmentData';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-top-component',
  standalone: true,
  imports: [NzIconModule, FontAwesomeModule],
  templateUrl: './top-component.component.html',
  styleUrl: './top-component.component.scss',
})
export class TopComponentComponent {
  appointments = appointments;
}
