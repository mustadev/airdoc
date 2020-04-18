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
import { DoctorAuthGuard } from './services/doctor-auth.guard';
import { PatientAuthGuard } from './services/patient-auth-guard';
import { AdminAuthGuard } from './services/admin-auth.guard';
import { AdminProfileComponent } from './components/pages/admin/admin-profile/admin-profile.component';
import { AdminLoginComponent } from './components/pages/admin/admin-login/admin-login.component';
import { AppointmentComponent } from './components/pages/patient/appointment/appointment.component';
import { ChangePasswordComponent} from './components/pages/patient/change-password/change-password.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { DoctorDashBoardComponent } from './components/pages/doctor/doctor-dash-board/doctor-dash-board.component';
import { PatientDashBoardComponent } from './components/pages/patient/patient-dash-board/patient-dash-board.component';
import { DoctorProfileSettingsComponent } from './components/pages/doctor/doctor-profile-settings/doctor-profile-settings.component';
import { BookingComponent } from './components/pages/booking/booking.component';
import { RatingStarComponent} from './components/rating-star/rating-star.component';
import { AppointementsComponent } from './components/pages/doctor/appointements/appointements.component';
import { ClinicComponent } from './components/clinic/clinic.component';
import { DoctorOverViewComponent } from './components/doctor-over-view/doctor-over-view.component';
import { ReviewFormComponent } from './components/review-form/review-form.component';
import { ClinicSettingsComponent } from './components/pages/doctor/clinic-settings/clinic-settings.component';
import { DoctorSideBarComponent } from './components/pages/doctor/doctor-side-bar/doctor-side-bar.component';
import { PatientSideBarComponent } from './components/pages/patient/patient-side-bar/patient-side-bar.component';

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
    AdminProfileComponent,
    AdminLoginComponent,
    AppointmentComponent,
    ChangePasswordComponent,
    ReviewsComponent,
    DoctorDashBoardComponent,
    PatientDashBoardComponent,
    DoctorProfileSettingsComponent,
    BookingComponent,
    RatingStarComponent,
    AppointementsComponent,
    ClinicComponent,
    DoctorOverViewComponent,
    ReviewFormComponent,
    ClinicSettingsComponent,
    DoctorSideBarComponent,
    PatientSideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    DoctorAuthGuard,
    PatientAuthGuard,
    AdminAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
