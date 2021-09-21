import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';
import { AskService } from './ask.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  private status : boolean = false;  //글로벌 변수

  constructor(private serv : AskService){
    serv.isLogged.subscribe( result=>{
      console.log('서버에 물어보고온 결과', result);
      this.status = result;
    });
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.serv.isLogIn();
    return this.status;
  }
}
