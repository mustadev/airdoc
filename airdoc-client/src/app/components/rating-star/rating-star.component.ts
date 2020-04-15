import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating-star',
  templateUrl: './rating-star.component.html',
  styleUrls: ['./rating-star.component.css']
})
export class RatingStarComponent implements OnInit {

  // @Input() max: number;
  @Output() onRating = new EventEmitter<number>();
  @Input() readonly:boolean = true;
  @Input() ratedCount:number;
 
  max:number = 5;
  maxItem : any[];
 
 constructor(){
     this.ratedCount = 0;
 }
 
 ngOnInit(){
     this.maxItem = [];
     for(var i=0;i<this.max;i++){
         this.maxItem.push(i+1);
     }
 }
 setClass(s:number){
  if(this.readonly){
    return {
      "fa fa-star":true,
      "ratingIcon":true,
      "ratingHover":false,
      "filled": s <= this.ratedCount,
     }
   }
   return {
    "fa fa-star":true,
    "ratingIcon":true,
    "ratingHover":true,
    "filled": s <= this.ratedCount,
   }

 }
 setHover(){
   if(this.readonly){
    return {
      "ratingIcon": true,
      "ratingHover":false,
     }
   }
   return {
    "ratingIcon":true,
    "ratingHover":true,
   }
}
 toggleRating(s:number){
   if (this.readonly){
     return;
   }
      this.ratedCount = s;
      this.onRating.emit(this.ratedCount);
 }

}
