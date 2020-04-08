import { Component, OnInit, Input } from '@angular/core';
import { Review } from 'src/app/models/Review';
import { Patient } from 'src/app/models/Patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  
  author:Patient;
  @Input() review:Review;
  constructor(private patientService:PatientService) { }

  ngOnInit(): void {
    //TODO get author
    //this.patientService.getById(this.review.authorId)
  }

  

}
