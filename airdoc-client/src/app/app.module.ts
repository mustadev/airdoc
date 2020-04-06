import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientComponent } from './components/patient/patient.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SearchComponent } from './components/pages/search/search.component';
import { ReviewComponent } from './components/review/review.component';
import { SignupComponent as DoctorSignupComponent } from './components/pages/doctor/signup/signup.component';
import { LoginComponent as DoctorLoginComponent } from './components/pages/doctor/login/login.component';
import { ProfileComponent as DoctorProfileComponent } from './components/pages/doctor/profile/profile.component';
import { SignupComponent as PatientSignupComponent } from './components/pages/patient/signup/signup.component';
import { LoginComponent as PatientLoginComponent } from './components/pages/patient/login/login.component';
import { ProfileComponent as PatientProfileComponent } from './components/pages/patient/profile/profile.component';
import { AuthInterceptor } from './services/auth-interceptor.service';
import { AppointmentComponent } from './components/pages/patient/appointment/appointment.component';
import { ChangePasswordComponent} from './components/pages/patient/change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    DoctorComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    SearchComponent,
    ReviewComponent,
    DoctorSignupComponent,
    DoctorLoginComponent,
    DoctorProfileComponent,
    PatientSignupComponent,
    PatientLoginComponent,
    PatientProfileComponent,
    AppointmentComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
