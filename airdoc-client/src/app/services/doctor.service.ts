import { Injectable } from '@angular/core';
import { HttpClient ,  HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from '../models/Doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  doctorUrl:string = "http://localhost:8080/doctors";
  constructor(private http:HttpClient) { }

  getDoctors():Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.doctorUrl);
  }
}
