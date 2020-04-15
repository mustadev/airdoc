import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Doctor } from 'src/app/models/Doctor';
import { DoctorService } from 'src/app/services/doctor.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Clinic } from 'src/app/models/Clinic';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  doctor:Doctor;
  clinic:Clinic;
  avatar:any;
  clinicPhotos:Array<any>
  id:string = "";
  isPatient:boolean=false;
  constructor(private route:ActivatedRoute,
    private doctorService:DoctorService, 
    private tokenStorage:TokenStorageService) { }

  ngOnInit(){
    this.route.params
  .subscribe(
    (params: Params) => {
      this.id = params['id'];
      console.log("Doctor id" + this.id);
      //Get Doctor
      this.doctorService.getById(this.id).subscribe(res => {
        this.doctor = res;
      });
      this.doctorService.getAvatar(this.id).subscribe(res => {
        this.avatar = 'data:image/jpeg;base64,' + res?.image?.data;
      });
      this.doctorService.getClinic(this.id).subscribe(res => {
        this.clinic = res;
      });
      this.doctorService.getClinicPhotos(this.id).subscribe(res => {
        //Convert image to base64 and return it;
        this.clinicPhotos = res.map(photo => 'data:image/jpeg;base64,' + photo.image.data);
      });
      this.isPatient = this.tokenStorage.getUserType() == "PATIENT";
    }
  );
  }

  
}
