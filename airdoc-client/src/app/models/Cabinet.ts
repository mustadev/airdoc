import { Review } from './Review';

export class Cabinet {
    name:string;
    speciality:string;
    rating:number;
    averageRating:number;
    services:Array<string>;
    reviews:Array<Review>;
    city:string;
    country:string;
    minPrice:number;
    maxPrice:number;

    constructor(
        name:string,
        speciality:string, 
        rating:number, 
        averageRating:number, 
        services:Array<string>, 
        city:string, 
        country:string,
        minPrice:number,
        maxPrice:number){
            this.name= name;
            this.speciality= speciality;
            this.rating = rating;
            this.averageRating = averageRating;
            this.services = services;
            this.city = city;
            this.country = country;
            this.minPrice = minPrice;
            this.maxPrice = maxPrice;
        };
}