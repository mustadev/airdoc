import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// const AUTH_API = 'http://localhost:8080/';
const DOCTOR_API = 'http://localhost:8080/doctors/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  doctorLogin(credentials): Observable<any> {
    console.log("email: " + credentials.email + " password: " + credentials.password);
    return this.http.post(DOCTOR_API + 'login', {
      email: credentials.email,
      password: credentials.password
    }, httpOptions);
    
  }

  //TODO define registration params
  doctorRegister(user): Observable<any> {
    return this.http.post(DOCTOR_API + 'signup', {
    //  username: user.username,
      email: user.email,
      password: user.password
    }, httpOptions);
  }
  //TODO define patients
}