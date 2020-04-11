import { Injectable } from '@angular/core';
import { HttpClient ,  HttpHeaders, HttpParams} from '@angular/common/http';
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

  getByUsername(username:string):Observable<Doctor>{
    
    return this.http.get<Doctor>(this.doctorUrl + "/username/" + username);
  }

  
  search(city:string, query:string):Observable<Doctor[]>{
    const params = new HttpParams()
      .set('city', city)
      .set('query', query);
    console.log("doc service", "city: " + city, "query : " + query);
    return this.http.get<Doctor[]>(this.doctorUrl, {'params': params})
  }

  getAvatar(id:string): Observable<any>{
    return this.http.get(this.doctorUrl + '/photo/' + id);
  }
}
