import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/Doctor';
import { AuthService } from 'src/app/services/auth.service';
import { DoctorService } from 'src/app/services/doctor.service';
import { Clinic } from 'src/app/models/Clinic';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-clinic-settings',
  templateUrl: './clinic-settings.component.html',
  styleUrls: ['./clinic-settings.component.css']
})
export class ClinicSettingsComponent implements OnInit {

  avatar:any;
  doctor:Doctor;
  clinic:Clinic;
  clinicPhotos:Array<any>
  specialities:string;
  services:string;

  uploadProgress:number;
  uploadErrorMessage:string;
  currentSelectedPhoto:any;

  constructor(private authService:AuthService, private doctorService:DoctorService) { }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(res => {
      this.doctorService.getAvatar(res.id).subscribe(avatar => {
        this.avatar = 'data:image/jpeg;base64,' + avatar?.image?.data;
      });
      this.doctorService.getById(res.id).subscribe(doctor => {
        this.doctor = doctor;
      });
      this.doctorService.getClinic(res.id).subscribe(clinic => {
        this.clinic = clinic;
        this.services = this.clinic.services.join(', ');
        this.specialities = this.clinic.specialities.join(', ');
      });
      this.doctorService.getClinicPhotos(res.id).subscribe(photos => {
        this.clinicPhotos = photos.map(photo => {
          return {
            "id": photo.id,
            "image": 'data:image/jpeg;base64,' + photo.image.data
          };
        });
      });
    })
  }

  onSubmit(){
    console.log("services: ", this.services.split(','));
    console.log("services: ", this.specialities.split(','));
    this.clinic.services = this.services.split(',');
    this.clinic.specialities = this.specialities.split(',');
    console.log("clinic new name: ", JSON.stringify(this.clinic));
     this.doctorService.updateClinic(this.doctor.id, this.clinic).subscribe(res => {
       this.clinic = res;
    });
  }

  deleteClinicPhoto(photoId:string){
    console.log("Photo ID: ", photoId);
    this.doctorService.deleteClinicPhoto(this.doctor.id, photoId).subscribe(res =>{
      console.log("photo Deleted", JSON.stringify(res));
      this.doctorService.getClinicPhotos(this.doctor.id).subscribe(photos => {
        this.clinicPhotos = photos.map(photo => {
          return {
            "id": photo.id,
            "image": 'data:image/jpeg;base64,' + photo.image.data
          };
        });
      });
    });
  }


  uploadClinicPhoto(event){
    this.currentSelectedPhoto = event.target.files.item(0);
    this.doctorService.uploadClinicPhoto(this.doctor.id,this.currentSelectedPhoto ).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.uploadProgress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.doctorService.getClinicPhotos(this.doctor.id).subscribe(photos => {
            this.clinicPhotos = photos.map(photo => {
              return {
                "id": photo.id,
                "image": 'data:image/jpeg;base64,' + photo.image.data
              };
            });
          });
        }
      },
      err => {
        this.uploadProgress = 0;
        this.uploadErrorMessage = 'Could not upload the Photo!';
        this.currentSelectedPhoto = undefined;
      });
  }

}