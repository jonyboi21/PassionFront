import {CanActivate} from "@angular/router";
import {Injectable} from "@angular/core";
import { AuthService} from "./auth.service";

@Injectable()
export class AuthGuard {


  constructor(private authService: AuthService) {
  }

  canActivate() {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.authService.login()
      return true;
    }
  }

  logOut(){
    this.authService.logout();
  }
}
