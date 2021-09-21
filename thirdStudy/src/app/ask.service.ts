import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AskService {

  //저장소(나중에 데이터베이스 서버)
  private readonly storage = {
    id : 'admin',
    passwd : '1234'
  }
  constructor() { 

  }

  //로그인을 시도하는 함수
  tryToLogin(param : any){
    return new Observable( arg=>{  //관측대상 생성
      if(param.id == this.storage.id && param.passwd == this.storage.passwd){  //로그인 정보가 맞다면
        arg.next({status: true});  //성공
        localStorage.setItem('status',"true");  //로컬저장소에 저장!
      } else {
        arg.next({status: false, reason : 'wrong information'});  //실패
      }
      arg.complete();
    });
  }


  readonly isLogged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  isLogIn() : void{
    if(localStorage.getItem('status') == 'true'){  //저장소에 로그인정보가 있는지 확인
      this.isLogged.next(true);
    } else {
      this.isLogged.next(false);
    }
  }

}
