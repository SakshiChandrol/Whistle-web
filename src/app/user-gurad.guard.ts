import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from './login-register-mod/login/login.component';
import { LoginService } from './service/login.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserGuradGuard implements CanActivate {
  constructor(private loginService: LoginService ){
  }
  
  value: boolean=true;
 
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
     
      return this.value;
  }
  
}
