import { Component, OnInit } from '@angular/core';

import { DoctorService } from '../../services/doctor.service';
import { IDoctor } from '../../Models/doctor';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-contact-grid',
  standalone: true,
  imports: [NzIconModule],
  templateUrl: './contact-grid.component.html',
  styleUrl: './contact-grid.component.scss',
})
export class ContactGridComponent implements OnInit {
  constructor(private doctorService: DoctorService) {}
  listOfDoctors: IDoctor[] = [];
  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.doctorService.getAllDoctors().subscribe((doctors) => {
      this.listOfDoctors = doctors;
    });
  }
}
