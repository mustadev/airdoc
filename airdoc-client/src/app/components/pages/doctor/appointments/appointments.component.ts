import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/models/Appointment';
import { Doctor } from 'src/app/models/Doctor';
import { AuthService } from 'src/app/services/auth.service';
import { DoctorService } from 'src/app/services/doctor.service';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  avatar:any;
  doctor:Doctor;
  appointments:Appointment[];
  constructor(
    private autService:AuthService,
    private doctorService:DoctorService,
    private appotmentService:AppointmentService ) { }

  ngOnInit(): void {
    this.autService.getCurrentUser().subscribe(user => {
      this.doctorService.getById(user.id).subscribe(doctor => {
        this.doctor = doctor;
      });
      this.doctorService.getAvatar(user.id).subscribe(avatar => {
        this.avatar = 'data:image/jpeg;base64,' + avatar?.image?.data;
      });
      this.appotmentService.getAllDoctorAppoitments(user.id).subscribe(apps => {
        this.appointments = apps;
      })
    });
  }

}
