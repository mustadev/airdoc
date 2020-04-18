import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Appointment } from 'src/app/models/Appointment';
import { Doctor } from 'src/app/models/Doctor';
import { Patient } from 'src/app/models/Patient';
import { DoctorService } from 'src/app/services/doctor.service';
import { PatientService } from 'src/app/services/patient.service';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  doctor:Doctor;
  patient:Patient;
  appointment:Appointment = new Appointment();
  constructor(private route:ActivatedRoute, 
    private tokenStorage:TokenStorageService,
    private doctorService:DoctorService,
    private patientService:PatientService,
    private appointmentService:AppointmentService) { }

  ngOnInit(): void {
    this.route.params
  .subscribe(
    (params: Params) => {
       params['id'];
      this.doctorService.getById(params['id']).subscribe(res =>{
        this.doctor = res;
        this.appointment.doctorId = this.doctor.id;

        console.log("Doctor: " + this.doctor.id);
      })
  });
  this.patientService.getById(this.tokenStorage.getUser().id).subscribe(res => {
    this.patient = res;
    this.appointment.patientId = this.patient.id;
    console.log("Patient: " + this.patient.id);
  })
  
}

onSubmit(formData){
  //DO LOGIC HERE
  // 
  this.appointmentService.add(this.appointment)
}

}
