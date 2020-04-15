import { Component, OnInit, Input } from '@angular/core';
import { Doctor } from 'src/app/models/Doctor';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  @Input() doctor:Doctor;
  @Input() isPatient:boolean;
  constructor() { }

  ngOnInit(): void {
  }

  onRating(data){
    console.log("rating: ", data);
  }
}
