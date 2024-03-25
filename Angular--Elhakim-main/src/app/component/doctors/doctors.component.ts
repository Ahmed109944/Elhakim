import { CommonModule } from '@angular/common';
import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';

import { Subscription } from 'rxjs';
import { IDoctor } from '../../Models/doctor';
import { DoctorService } from '../../services/doctor.service';

@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [
    NzTableModule,
    NzIconModule,
    CommonModule,
    NzModalModule,
    FormsModule,
  ],
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.scss',
})
export class DoctorsComponent implements OnInit, OnDestroy, OnChanges {
  @ViewChild('form') form!: TemplateRef<any>;
  @ViewChild('DRForm') public DRForm!: NgForm;
  constructor(
    private message: NzMessageService,
    private modal: NzModalService,
    private doctorSrv: DoctorService
  ) {}

  doctorInfo: IDoctor = {} as IDoctor;
  subscriptions: Subscription[] = [];
  searchText: string = '';
  editDRBtn: boolean = false;

  checked = false;
  indeterminate = false;
  listOfCurrentPageData: readonly IDoctor[] = [];
  listOfData: IDoctor[] = [];
  setOfCheckedId = new Set<number>();
  filteredListOfData: IDoctor[] = [];

  showDeleteConfirm(id: number): void {
    console.log(id);
    this.modal.confirm({
      nzTitle: 'Are you sure delete this Doctor?',
      nzContent: `<p class ="h5 "> for this user </p>`,
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => this.deleteDR(id),
      nzCancelText: 'No',
    });
  }
  deleteDR(id: number): void {
    this.doctorSrv.deleteDoctor(id).subscribe((data) => {
      this.subscriptions.push(this.getAllDoctors());
    });
  }
  editDoctor(doctorID: number): void {
    this.editDRBtn = true;
    let foundedDR: IDoctor | undefined = this.listOfData.find(
      (dr) => dr.id == doctorID
    );

    this.doctorInfo.id = foundedDR?.id!;
    this.doctorInfo.image = foundedDR?.image!;
    this.doctorInfo.name = foundedDR?.name!;
    this.doctorInfo.email = foundedDR?.email!;
    this.doctorInfo.joiningDate = foundedDR?.joiningDate!;

    this.doctorInfo.mobile = foundedDR?.mobile!;
    this.doctorInfo.specialization = foundedDR?.specialization!;
    this.doctorInfo.degree = foundedDR?.degree!;

    this.modal.confirm({
      nzClosable: false,
      nzTitle: 'update DR INFO',
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
        console.log(this.DRForm);
        this.DRForm.onReset();
        console.log(this.DRForm);
      },
    });
  }
  updateDoctor(formAppo: NgForm) {
    this.modal.closeAll();
    this.doctorSrv.updateDoctor(this.doctorInfo).subscribe((data) => {
      this.getAllDoctors();
      formAppo.onReset();
    });
  }
  addDoctor(): void {
    this.editDRBtn = false;
    this.modal.confirm({
      nzClosable: false,
      nzTitle: 'Add New Appointement',
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
  confirmAddDoctor(formDR: NgForm): void {
    this.modal.closeAll();
    this.doctorSrv.addDoctor(this.doctorInfo).subscribe((data) => {
      this.message.create('success', `add succes ESC to close `);
      this.subscriptions.push(this.getAllDoctors());
    });
    formDR.onReset();
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

  onCurrentPageDataChange($event: readonly IDoctor[]): void {
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
    return this.doctorSrv.getAllDoctors().subscribe((data) => {
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
