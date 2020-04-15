import { Component, OnInit, Input } from '@angular/core';
import { Clinic } from 'src/app/models/Clinic';
import { Doctor } from 'src/app/models/Doctor';

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.css']
})
export class ClinicComponent implements OnInit {

  @Input() clinic:Clinic;
  @Input() doctor:Doctor;
  constructor() { }

  ngOnInit(): void {
  }

}
