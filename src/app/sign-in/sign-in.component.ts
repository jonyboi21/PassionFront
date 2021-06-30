import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../data.service";
import { AuthService} from "../auth.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  username: string;
  password: string

  constructor(private data: DataService, private router: Router, private authService: AuthService) {
    authService.handleAuthentication();
  }


  ngOnInit(): void {
  }

  LogInUser() {
    if (this.username.toUpperCase() === 'ADMIN' && this.password === 'admin123') {
      this.authService.login()
      // this.router.navigate(['app-admin'])
      // this.authService.isAuthenticated()
    }else alert("Wrong username or password")
  }
}
