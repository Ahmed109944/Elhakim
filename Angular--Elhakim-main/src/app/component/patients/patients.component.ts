import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { PatientsService } from '../../services/patient.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import { IPatient } from '../../Models/patient';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-patients',
  standalone: true,
  imports: [
    NzTableModule,
    NzIconModule,
    CommonModule,
    NzModalModule,
    FormsModule,
  ],
  templateUrl: './patients.component.html',
  styleUrl: './patients.component.scss',
})
export class PatientsComponent implements OnInit {
  @ViewChild('form') form!: TemplateRef<any>;
  @ViewChild('PatientForm') public PatientForm!: NgForm;
  constructor(
    private message: NzMessageService,
    private modal: NzModalService,
    private patientSRV: PatientsService
  ) {}

  patientINFO: IPatient = {} as IPatient;
  subscriptions: Subscription[] = [];
  searchText: string = '';
  editDRBtn: boolean = false;

  checked = false;
  indeterminate = false;
  listOfCurrentPageData: readonly IPatient[] = [];
  listOfData: IPatient[] = [];
  setOfCheckedId = new Set<number>();
  filteredListOfData: IPatient[] = [];

  showDeleteConfirm(id: number): void {
    console.log(id);
    this.modal.confirm({
      nzTitle: 'Are you sure delete this Patient?',
      nzContent: `<p class ="h5 "> for this user </p>`,
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => this.deletePT(id),
      nzCancelText: 'No',
    });
  }
  deletePT(id: number): void {
    this.patientSRV.deletePatient(id).subscribe((data) => {
      this.subscriptions.push(this.getAllDoctors());
    });
  }
  editPatient(patientID: number): void {
    this.editDRBtn = true;
    let foundedDR: IPatient | undefined = this.listOfData.find(
      (dr) => dr.id == patientID
    );

    this.patientINFO.id = foundedDR?.id!;
    this.patientINFO.image = foundedDR?.image!;
    this.patientINFO.name = foundedDR?.name!;
    this.patientINFO.email = foundedDR?.email!;
    this.patientINFO.bloodGroup = foundedDR?.bloodGroup!;
    this.patientINFO.dateOfBirth = foundedDR?.dateOfBirth!;
    this.patientINFO.mobile = foundedDR?.mobile!;

    this.patientINFO.gender = foundedDR?.gender!;

    this.modal.confirm({
      nzClosable: false,
      nzTitle: 'update Patient INFO',
      nzContent: this.form,
      nzOkDisabled: true,
      nzBodyStyle: {
        width: 'fit-content',
        background: ' rgba(255, 255, 255)',
      },

      nzStyle: { width: 'fit-content', top: '0px' },
      nzOkText: 'ESC',

      nzCancelText: 'Cancle',
      nzOnCancel: () => {
        this.PatientForm.reset();
      },
    });
  }
  updateDoctor(PatientForm: NgForm): void {
    this.modal.closeAll();
    this.patientSRV.updatePatient(this.patientINFO).subscribe((data) => {
      this.getAllDoctors();
      PatientForm.onReset();
    });
  }
  addDoctor(): void {
    this.editDRBtn = false;
    this.modal.confirm({
      nzClosable: false,
      nzTitle: 'Add New Patient',
      nzContent: this.form,
      nzOkDisabled: true,
      nzBodyStyle: {
        width: 'fit-content',
        background: ' rgba(255, 255, 255)',
      },

      nzStyle: { width: 'fit-content', top: '0px' },
      nzOkText: 'ESC',

      nzCancelText: 'Cancle',
    });
  }
  confirmAddDoctor(PatientForm: NgForm): void {
    this.modal.closeAll();
    this.patientSRV.addPatient(this.patientINFO).subscribe((data) => {
      this.message.create('success', `add succes ESC to close `);
      this.subscriptions.push(this.getAllDoctors());
    });
    PatientForm.onReset();
  }
  search(): void {
    let filtered = this.listOfData.filter((item) =>
      item.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
    if (filtered.length > 0) {
      this.filteredListOfData = filtered;
    } else {
      this.filteredListOfData = [];
    }
  }
  delete(): void {
    this.listOfData = this.listOfData.filter((item) => {
      return !this.setOfCheckedId.has(item.id);
    });
    this.setOfCheckedId.clear();
    this.checked = false;
  }

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(value: boolean): void {
    this.listOfCurrentPageData.forEach((item) =>
      this.updateCheckedSet(item.id, value)
    );
    this.refreshCheckedStatus();
  }

  onCurrentPageDataChange($event: readonly IPatient[]): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every((item) =>
      this.setOfCheckedId.has(item.id)
    );
    this.indeterminate =
      this.listOfCurrentPageData.some((item) =>
        this.setOfCheckedId.has(item.id)
      ) && !this.checked;
  }
  getAllDoctors(): Subscription {
    return this.patientSRV.getAllPatients().subscribe((data) => {
      this.listOfData = data;
    });
  }
  ngOnInit(): void {
    const subscriptionAllAppoi: Subscription = this.getAllDoctors();
    this.subscriptions.push(subscriptionAllAppoi);
  }
  ngOnChanges(): void {}
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }
}
