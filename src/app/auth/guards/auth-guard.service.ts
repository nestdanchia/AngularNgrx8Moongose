import { Injectable } from '@angular/core';
import { ServiceService } from '../auth/authService/service.service';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: ServiceService,
     private router: Router) { }
     canActivate() {
      if (this.authService.logIn()) {
        this.router.navigate(['customer/add']);
      }
      return !this.authService.logIn();
    }
}
