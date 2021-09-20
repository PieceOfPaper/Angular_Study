import { Injectable } from '@angular/core';
import { INFORMATION } from './MyType';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  public readonly myData : INFORMATION = {  //내가 전달할 데이터
    data1 : 'data1',
    data2 : 1433,
    data3 : ['data3_1','data3_2']
  };

  constructor() { }

  private FACTORY : BehaviorSubject<any> = new BehaviorSubject({});  //??
  public readonly TV: Observable<any> = this.FACTORY.asObservable();  //??????

  public addData(arg : boolean, loginInfomation? : any) : void{
    if(arg){
      this.FACTORY.next(loginInfomation);  //????
    } 
  }
}
