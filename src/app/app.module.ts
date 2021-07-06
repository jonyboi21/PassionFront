import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from "@angular/router";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AlumniComponent } from './alumni/alumni.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SignInComponent } from './sign-in/sign-in.component';
import { AdminComponent } from './admin/admin.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthService} from "./auth.service";
import {DataService} from "./data.service";
import {AuthGuard} from "./auth.guard";
import { CallbackComponent } from './callback/callback.component';
import {ChartModule} from "angular2-chartjs";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavBarComponent,
    ContactUsComponent,
    AlumniComponent,
    SignInComponent,
    AdminComponent,
    LandingPageComponent,
    AboutUsComponent,
    CallbackComponent,


  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ChartModule
  ],
  providers: [
    AuthService, AuthGuard, DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
