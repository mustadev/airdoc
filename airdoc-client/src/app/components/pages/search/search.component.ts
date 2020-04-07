import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/Doctor';
import { Review } from 'src/app/models/Review';
import { DoctorService } from 'src/app/services/doctor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  doctors: Array<Doctor> = [];
  searchLocation:string = "";
  searchQuery:string = "";

  constructor(
    private doctorService: DoctorService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap
                .subscribe(params => {
            this.searchLocation = params.get('location') + "";
            this.searchQuery = params.get('query') + "";
            this.search(this.searchLocation, this.searchQuery);
        });
    /* this.doctors = [
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
     */
    this.doctorService.getDoctors().subscribe((doctors) => {
        console.log(doctors);
        this.doctors = doctors;
      });

  }

  search(location:string, query:string){
    console.log("searchCom", "location: " + location, "query: " +query);
    this.doctorService.search(location, query);
  }

}
