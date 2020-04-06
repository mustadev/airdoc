import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';


  const DOCTOR = "DOCTOR";
  const PATIENT = "PATIENT";
  const EMPLOYEE = "EMPLOYEE";
  
  @Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
  })
export class HeaderComponent implements OnInit {

  
  private roles: string[];
  isLoggedIn = false;
  //showAdminBoard = false;
  //showModeratorBoard = false;
  showDoctorMenu = false;
  showPatientMenu = false;
  showEmployeeMenu = false;
  username: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      const userType = this.tokenStorageService.getUserType();
      this.roles = user.roles;

      //this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      //this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.showDoctorMenu = userType == DOCTOR;
      this.showPatientMenu = userType == PATIENT;
      this.showEmployeeMenu = userType == EMPLOYEE;

      this.username = user.username;
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
