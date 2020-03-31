import { Component, OnInit , Input } from '@angular/core';
import { Doctor } from 'src/app/models/Doctor';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  @Input() doctor:Doctor;
  speciality:string;

  constructor() { }

  ngOnInit(): void {
    
  }

  getSpecialityIconUrl():string{
    this.speciality = this.doctor.speciality.toLocaleLowerCase();
    if (this.speciality == "dentist"){
      return "specialities-05.png";
    }
  }

}
