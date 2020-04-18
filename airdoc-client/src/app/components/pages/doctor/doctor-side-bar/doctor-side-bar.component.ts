import { Component, OnInit, Input } from '@angular/core';
import { Doctor } from 'src/app/models/Doctor';

@Component({
  selector: 'app-doctor-side-bar',
  templateUrl: './doctor-side-bar.component.html',
  styleUrls: ['./doctor-side-bar.component.css']
})
export class DoctorSideBarComponent implements OnInit {

  @Input() active:string;
  @Input() avatar:any;
  @Input() doctor:Doctor;
  constructor() { }

  ngOnInit(): void {
  }

}
