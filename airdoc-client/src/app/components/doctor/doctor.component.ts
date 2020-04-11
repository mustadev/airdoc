import { Component, OnInit, Input } from '@angular/core';
import { Doctor } from 'src/app/models/Doctor';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  @Input() doctor: Doctor;
  retrievedAvatar:string;
  retrieveResonse:any;
  base64Data:string;
  speciality: string;

  constructor(private doctorService:DoctorService) { }

  ngOnInit(): void {
    this.doctorService.getAvatar(this.doctor.avatar).subscribe(res=> {
      this.retrieveResonse = res;
      this.base64Data = this.retrieveResonse.message;
      this.retrievedAvatar = 'data:image/jpeg;base64,' + this.base64Data;
      console.log(res);
      //console.log("base64", this.base64Data);
      console.log("retrievedAvatar: ", this.retrievedAvatar);
    });
  }
}
