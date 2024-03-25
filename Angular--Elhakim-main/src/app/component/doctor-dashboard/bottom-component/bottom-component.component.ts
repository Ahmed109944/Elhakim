import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../../services/doctor.service';
import { NgChartsModule } from 'ng2-charts';
import { ChartData,ChartOptions } from 'chart.js';


@Component({
  selector: 'app-bottom-component',
  standalone: true,
  imports: [NgChartsModule],
  templateUrl: './bottom-component.component.html',
  styleUrl: './bottom-component.component.scss'
})
export class BottomComponentComponent implements OnInit{

  data:ChartData<'bar'>={
    labels:['Mon','Tue','Wed','Thu','Fri','Sat'],
    datasets:[
      {
        data:[44,55,57,56,61,58],label:'Male'
         
      },
      {
        data:[76,85,101,98,87,105],label:'Female'
         
      },
      
    ],
 
   
  }
  options={

    maintainAspectRatio: false, // Set to false to allow custom height
    responsive: true,
    height: 400,

     // Set your desired height
  }
 
  doctorList:any;
  constructor(private doctorService:DoctorService){

  }
  ngOnInit(): void {
 
    this.getAllDoctors()
  }

  getAllDoctors(){
    this.doctorService.getAllDoctors().subscribe(doctors=>{

      this.doctorList=doctors
    })
    
  }
}
