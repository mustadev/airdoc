import { Review } from './Review';
import { Clinic } from './Clinic';

export class Doctor {
    id:string;
    firstname:string;
    lastname:string;
    username:string;
    email:string;
    speciality:string;
    clinic:Clinic;
    reviews:Array<Review>;
    rating:number;
    averageRating:number;
    aboutMe:string;
}

// constructor(
    //     name:string,
    //     speciality:string, 
    //     rating:number, 
    //     averageRating:number, 
    //     services:Array<string>, 
    //     city:string, 
    //     country:string,
    //     minPrice:number,
    //     maxPrice:number){
    //         this.name= name;
    //         this.speciality= speciality;
    //         this.rating = rating;
    //         this.averageRating = averageRating;
    //         this.services = services;
    //         this.city = city;
    //         this.country = country;
    //         this.minPrice = minPrice;
    //         this.maxPrice = maxPrice;
    //     };