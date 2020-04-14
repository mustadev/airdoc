import { Injectable } from '@angular/core';
import { HttpClient ,  HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from '../models/Doctor';
import { Clinic } from '../models/Clinic';

const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  doctorUrl:string = "http://localhost:8080/doctors";
  
  constructor(private http:HttpClient) { }

  
  getDoctors():Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.doctorUrl);
  }

  getById(id:string):Observable<Doctor>{
    return this.http.get<Doctor>(this.doctorUrl + "/" + id);
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
    return this.http.get(this.doctorUrl +  "/" + id + '/avatar');
  }

  getClinic(id:string): Observable<Clinic>{
    return this.http.get<Clinic>(this.doctorUrl +  "/" + id + '/clinic');
  }

  getClinicPhotos(id:string): Observable<Array<any>>{
    return this.http.get<Array<any>>(this.doctorUrl +  "/" + id + '/clinic/photos');
  }

}
