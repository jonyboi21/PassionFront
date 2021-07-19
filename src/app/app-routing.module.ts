import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {AlumniComponent} from "./alumni/alumni.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {AdminComponent} from "./admin/admin.component";
import {AuthGuard} from "./auth.guard";
import {AboutUsComponent} from "./about-us/about-us.component";
import {CallbackComponent} from "./callback/callback.component";
import {WenyenStatsComponent} from "./wenyen-stats/wenyen-stats.component";
import {NateStatsComponent} from "./nate-stats/nate-stats.component";

const routes: Routes = [
  {path: 'app-home', component: HomeComponent},
  {path: 'app-contact-us', component: ContactUsComponent},
  {path: 'app-alumni', component: AlumniComponent},
  {path: 'app-sign-in', component: SignInComponent},
  {path: 'app-admin', component: AdminComponent, canActivate: [AuthGuard]},
  {path: 'app-about-us', component: AboutUsComponent},
  {path: 'app-wenyen-stats', component: WenyenStatsComponent},
  {path: 'app-nate-stats', component: NateStatsComponent},
  {path: 'app-callback', component: CallbackComponent},
  {path: '', redirectTo: '/app-home', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
