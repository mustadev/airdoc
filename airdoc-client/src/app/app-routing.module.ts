import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/pages/contact/contact.component';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ProfileComponent as DoctorProfileComponent } from './components/pages/doctor/profile/profile.component';
import { LoginComponent as DoctorLoginComponent } from './components/pages/doctor/login/login.component';
import { SignupComponent as DoctorSingupComponent} from './components/pages/doctor/signup/signup.component';
import { LoginComponent as PatientLoginComponent } from './components/pages/patient/login/login.component';
import { SignupComponent as PatientSingupComponent} from './components/pages/patient/signup/signup.component';
import { ProfileComponent as PatientProfileComponent } from './components/pages/patient/profile/profile.component';
import { SearchComponent } from './components/pages/search/search.component';

const routes: Routes = [
  { path:  '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'contact' , component: ContactComponent },
  { path: 'about' , component: AboutComponent },
  { path: 'doctor/profile' , component: DoctorProfileComponent },
  { path: 'doctor/login' , component: DoctorLoginComponent },
  { path: 'doctor/signup' , component: DoctorSingupComponent },
  { path: 'patient/profile' , component: PatientProfileComponent },
  { path: 'patient/login' , component: PatientLoginComponent },
  { path: 'patient/signup' , component: PatientSingupComponent },
  { path: 'search' , component: SearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
