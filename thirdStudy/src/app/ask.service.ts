import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { AngularFirestore, CollectionReference, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

import {take, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AskService {

  private DataBase: AngularFirestore;
  private collectionArray: {[key: string]: AngularFirestoreCollection<any> | null} = {};

  //저장소(나중에 데이터베이스 서버)
  private readonly storage = {
    id : 'admin',
    passwd : '1234'
  }

  constructor(db: AngularFirestore) {
    this.DataBase = db;
  }
  
  testPipeTake(){
    this.DataBase.collection<any>("test").stateChanges().pipe(
      take(1), 
      map(actions => {
        return actions.map(a => a.payload.doc.data());
      })
    ).subscribe(
      arg=>{
        console.log(arg);
      }
    );
  }

  getItem(db_name: string) {
    if(this.collectionArray[db_name]){  //등록에 의해 단순하게 생성되었다면
      this.collectionArray[db_name] = null;
    }
    this.collectionArray[db_name] = this.DataBase.collection<any>(db_name, (ref: CollectionReference) => {
      return ref;
    });  //리턴
    return this.collectionArray[db_name];
  }

  addItem(db_name : string, data : any){
    if(this.collectionArray[db_name] == null){  //등록하러 왔는데 없다면,
      this.collectionArray[db_name] = this.DataBase.collection<any>(db_name);
    }
    this.collectionArray[db_name]?.add(data);
  }

  updateData(db_name: string, parameter : any, target_id : any){
    this.collectionArray[db_name]?.stateChanges().pipe(
      take(1), //구독행위는 1번만 하세요!
      map( (actions:any) => {
        return actions.map((a : any) => {
          const data = a.payload.doc.data();  //데이터  
          const ID = a.payload.doc.id;  //고유 키 값
          if(target_id  == ID){  //들어온 아이디 값이 일치한다면
            this.collectionArray[db_name]?.doc(ID).update(parameter);  //교체할 내용을 바꿉니다.
          }
          return data;
        });
      })
    ).subscribe();
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
