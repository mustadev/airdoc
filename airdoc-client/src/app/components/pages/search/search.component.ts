import { Component, OnInit } from '@angular/core';
import { Cabinet } from 'src/app/models/Cabinet';
import { Review } from 'src/app/models/Review';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  cabinets:Array<Cabinet>;
  constructor() { }

  ngOnInit(): void {
    this.cabinets = [
      {
        name: "asafar",
        speciality: "MS - Orthopaedics, MBBS, M.Ch - Orthopaedics",
        rating: 4,
        averageRating: 12,
        reviews:[
          new Review("review 1", 2, 1, "musta"),
          new Review("review 1", 2, 1, "musta"),
          new Review("review 1", 2, 1, "musta"),
          new Review("review 1", 2, 1, "musta")
        ],
        city: "agadir",
        country: "morocco",
        services:[],
        minPrice:100,
        maxPrice: 1000

      },
      {
        name: "asafar",
        speciality: "MS - Orthopaedics, MBBS, M.Ch - Orthopaedics",
        rating: 4,
        averageRating: 17,
        reviews:[
          new Review("review 1", 2, 1, "musta"),
          new Review("review 1", 2, 1, "musta"),
          new Review("review 1", 2, 1, "musta")
        ],
        city: "agadir",
        country: "morocco",
        services:["Dental Fillings", "Whitneing"],
        minPrice:100,
        maxPrice: 1000

      },
      {
        name: "asafar",
        speciality: "MS - Orthopaedics, MBBS, M.Ch - Orthopaedics",
        rating: 4,
        averageRating: 17,
        reviews:[
          new Review("review 1", 2, 1, "musta"),
          new Review("review 1", 2, 1, "musta"),
          new Review("review 1", 2, 1, "musta")
        ],
        city: "agadir",
        country: "morocco",
        services:["Dental Fillings", "Whitneing"],
        minPrice:100,
        maxPrice: 1000

      },
      {
        name: "asafar",
        speciality: "MS - Orthopaedics, MBBS, M.Ch - Orthopaedics",
        rating: 4,
        averageRating: 17,
        reviews:[
          new Review("review 1", 2, 1, "musta"),
          new Review("review 1", 2, 1, "musta"),
          new Review("review 1", 2, 1, "musta")
        ],
        city: "agadir",
        country: "morocco",
        services:["Dental Fillings", "Whitneing"],
        minPrice:100,
        maxPrice: 1000

      }
    ];
  }

}
