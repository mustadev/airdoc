import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Appointement } from '../models/Appointement';

@Injectable({
  providedIn: 'root'
})
export class AppointementService {

  constructor(private http:HttpClient) { }


  add(appointement:Appointement){
    // logic here using http
  }
}
