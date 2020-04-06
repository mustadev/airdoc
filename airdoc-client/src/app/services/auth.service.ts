import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// const AUTH_API = 'http://localhost:8080/';
const DOCTOR_API = 'http://localhost:8080/api/auth/doctor/'; //TODO make this just /auth/doctor/
const PATIENT_API = 'http://localhost:8080/api/auth/patient/';
const EMPLOYEE_API = 'http://localhost:8080/api/auth/employee/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials, api:string): Observable<any> {
    console.log("email: " + credentials.email + " password: " + credentials.password);
    return this.http.post(api + 'signin', {
      email: credentials.email,
      password: credentials.password
    }, httpOptions);
    
  }

  //TODO define registration params
  register(user, api:string): Observable<any> {
    return this.http.post(DOCTOR_API + 'signup', {
    //  username: user.username,
      email: user.email,
      password: user.password
    }, httpOptions);
  }
  //TODO define patients

  doctorLogin(credentials): Observable<any> {
    return this.login(credentials, DOCTOR_API); 
  }

  //TODO define registration params
  doctorRegister(user): Observable<any> {
    return this.register(user, DOCTOR_API);
  }
  
  patientLogin(credentials): Observable<any> {
    return this.login(credentials, PATIENT_API); 
  }

  //TODO define registration params
  patientRegister(user): Observable<any> {
    return this.register(user, PATIENT_API);
  }
  
  employeetLogin(credentials): Observable<any> {
    return this.login(credentials, EMPLOYEE_API); 
  }

  //TODO define registration params
  employeeRegister(user): Observable<any> {
    return this.register(user, EMPLOYEE_API);
  }
  
}