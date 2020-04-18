import { Component, OnInit, Input } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';
import { Appointment } from 'src/app/models/Appointment';
import { Patient } from 'src/app/models/Patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appoitment.component.html',
  styleUrls: ['./appoitment.component.css']
})
export class AppointmentComponent implements OnInit {

  
  appointment:Appointment;
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
