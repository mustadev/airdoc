import { Component, OnInit, Input } from '@angular/core';
import { Appointment } from 'src/app/models/Appointment';
import { Patient } from 'src/app/models/Patient';
import { AppointmentService } from 'src/app/services/appointment.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-doctor-appointment',
  templateUrl: './doctor-appointment.component.html',
  styleUrls: ['./doctor-appointment.component.css']
})
export class DoctorAppointmentComponent implements OnInit {

  @Input() appointment:Appointment;
  patient:Patient;
  
  constructor(
    private appointmentService:AppointmentService,
    private patientService:PatientService) { }

  ngOnInit(): void {
    this.patientService.getById(this.appointment.patientId).subscribe(res => {
      this.patient = res;
    })
  }

  viewAppointment(){
    this.appointment.state = "accepted";
    this.appointmentService.update(this.appointment);
  }

  cancelAppointment(){
    this.appointment.state = "canceled";
    this.appointmentService.update(this.appointment);
  }

  viewAppoitment(){
    // navigate to appoitment page;
  }
}
