import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(

    private router: Router,
  ) { }
  canActivate(): boolean {


    if (localStorage.getItem('loginData')) {
      return true;
    }

    else {
      this.router.navigate([''])
      return false
    }
  }



}
