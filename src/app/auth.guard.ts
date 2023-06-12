import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { SigninService } from './service/user/signin.service';
import { Observable } from 'rxjs';

export class AuthGuard implements CanActivate {
  constructor() {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const userInfo = JSON.parse(localStorage.getItem('user') || '{}');
    if (userInfo?.isAdmin === false) {
      window.alert('Bạn không phải admin')
      history.back()
      return false;
    }
    return true;
  }
}
