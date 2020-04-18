import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/Doctor';
import { DoctorService } from 'src/app/services/doctor.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-doctor-profile-settings',
  templateUrl: './doctor-profile-settings.component.html',
  styleUrls: ['./doctor-profile-settings.component.css']
})
export class DoctorProfileSettingsComponent implements OnInit {

  doctor:Doctor;
  avatar:any;
  constructor(
    private doctorService:DoctorService,
    private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(res => {
      this.doctorService.getById(res.id).subscribe(doc => {
        this.doctor = doc;
      });
      this.doctorService.getAvatar(res.id).subscribe(avatar => {
        this.avatar = 'data:image/jpeg;base64,' + avatar?.image?.data;
      })
    })
  }

  onSubmit(){

  }

}
