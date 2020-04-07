import { Injectable } from '@angular/core';
import { HttpClient ,  HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from '../models/Doctor';

const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  doctorUrl:string = "http://localhost:8080/doctors";
  
  constructor(private http:HttpClient) { }

  //FOR TEST
  // getPublicContent(): Observable<any> {
  //   return this.http.get(API_URL + 'all', { responseType: 'text' });
  // }

  // getUserBoard(): Observable<any> {
  //   return this.http.get(API_URL + 'user', { responseType: 'text' });
  // }

  // getModeratorBoard(): Observable<any> {
  //   return this.http.get(API_URL + 'mod', { responseType: 'text' });
  // }

  // getAdminBoard(): Observable<any> {
  //   return this.http.get(API_URL + 'admin', { responseType: 'text' });
  // }
  
  getDoctors():Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.doctorUrl);
  }

  
  search(location:string, query:string){
    console.log("doc service", "location: " + location, "query : " + query);
  }
}
