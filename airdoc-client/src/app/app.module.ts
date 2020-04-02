import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { SinginComponent } from './components/pages/singin/singin.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SearchComponent } from './components/pages/search/search.component';
import { ReviewComponent } from './components/review/review.component';
import { PatientComponent } from "./components/patient/patient.component";


@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ProfileComponent,
    SinginComponent,
    LoginComponent,
    SearchComponent,
    ReviewComponent,
    PatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
