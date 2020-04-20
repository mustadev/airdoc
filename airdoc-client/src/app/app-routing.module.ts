import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/pages/contact/contact.component';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ProfileComponent as DoctorProfileComponent } from './components/pages/doctor/profile/profile.component';
import { LoginComponent as DoctorLoginComponent } from './components/pages/doctor/login/login.component';
import { SignupComponent as DoctorSingupComponent} from './components/pages/doctor/signup/signup.component';
import { DoctorDashBoardComponent } from './components/pages/doctor/doctor-dash-board/doctor-dash-board.component';
import { DoctorProfileSettingsComponent } from './components/pages/doctor/doctor-profile-settings/doctor-profile-settings.component';
import { ClinicSettingsComponent } from './components/pages/doctor/clinic-settings/clinic-settings.component';
import { DoctorAppointmentsComponent } from './components/pages/doctor/doctor-appointments/doctor-appointments.component'; 
import { LoginComponent as PatientLoginComponent } from './components/pages/patient/login/login.component';
import { SignupComponent as PatientSingupComponent} from './components/pages/patient/signup/signup.component';
import { ProfileComponent as PatientProfileComponent } from './components/pages/patient/profile/profile.component';
import { PatientAppointmentsComponent } from './components/pages/patient/patient-appointments/patient-appointments.component';
import { SearchComponent } from './components/pages/search/search.component';

import { DoctorAuthGuard } from './services/doctor-auth.guard';
import { PatientAuthGuard } from './services/patient-auth-guard';
import { ChangePasswordComponent } from './components/pages/patient/change-password/change-password.component';
import { BookingComponent } from './components/pages/booking/booking.component';

// @ts-ignore
// @ts-ignore
const routes: Routes = [
  { path:  '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'contact' , component: ContactComponent },
  { path: 'about' , component: AboutComponent },
  { path: 'doctor/profile/:id' , component: DoctorProfileComponent, },
  { path: 'doctor/login' , component: DoctorLoginComponent },
  { path: 'doctor/signup' , component: DoctorSingupComponent },
  { path: 'doctor/dashboard' , component: DoctorDashBoardComponent, canActivate: [DoctorAuthGuard]},
  { path: 'doctor/profile-settings' , component: DoctorProfileSettingsComponent, canActivate: [DoctorAuthGuard]},
  { path: 'doctor/clinic-settings' , component: ClinicSettingsComponent, canActivate: [DoctorAuthGuard]},
  { path: 'doctor/appointments' , component: DoctorAppointmentsComponent, canActivate: [DoctorAuthGuard]},
  { path: 'patient/profile' , component: PatientProfileComponent},
  { path: 'patient/login' , component: PatientLoginComponent },
  { path: 'patient/signup' , component: PatientSingupComponent },
  { path: 'search' , component: SearchComponent },
  { path: 'booking/:id' , component: BookingComponent, canActivate: [PatientAuthGuard]},
  { path: 'patient/appointments' , component: PatientAppointmentsComponent},
  { path: 'patient/edit-password' , component: ChangePasswordComponent},
  { path: '**', redirectTo: 'home' } //this must be the last

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
