import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service'
import { TokenStorageService } from '../../../../services/token-storage.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-patient-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  retUrl:string = "patient/profile";

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
    this.activatedRoute.queryParamMap
                .subscribe(params => {
            this.retUrl = params.get('retUrl'); 
            console.log( 'LoginComponent/ngOnInit '+ this.retUrl);
        });
  }

  onSubmit() {
    this.authService.doctorLogin(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.tokenStorage.saveUserType(data.userType);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        console.log("login successful");
        console.log(this.tokenStorage.getUser());
        console.log( 'return to '+ this.retUrl);
           if (this.retUrl!=null) {
                this.router.navigate( [this.retUrl]);
           } else {
                this.router.navigate( ['patient/profile']);
           }
        
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  
}