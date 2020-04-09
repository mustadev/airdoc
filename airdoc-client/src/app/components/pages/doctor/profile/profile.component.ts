import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Doctor } from 'src/app/models/Doctor';
import { DoctorService } from 'src/app/services/doctor.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  doctor:Doctor;
  username:string = "";
  isPatient:boolean=false;
  constructor(private route:ActivatedRoute,
    private doctorService:DoctorService, 
    private tokenStorage:TokenStorageService) { }

  ngOnInit(){
    this.route.params
  .subscribe(
    (params: Params) => {
      this.username = params['username'];
      console.log("print username" + this.username);
      this.getDoctorByUsername(this.username);
      this.isPatient = this.tokenStorage.getUserType() == "PATIENT";
    }
  );
  }

  getDoctorByUsername(username:string){
    this.doctorService
    .getByUsername(username)
    .subscribe((doctor:Doctor) => {
      this.doctor = doctor;
      console.log("Doctor profile: ", doctor);
    });
  }
  
}
