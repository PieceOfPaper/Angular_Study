import { Component } from '@angular/core';
import { AngularFirestoreModule, AngularFirestore, AngularFirestoreCollection, CollectionReference } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'thirdStudy';

  private DataBase : AngularFirestore;
  private itemsCollection: AngularFirestoreCollection<any> | undefined;

  constructor(db : AngularFirestore) {   //모듈에서 만들어진 파이어 베이스 접속관련 객체
    this.DataBase = db;
    this.getItem('board').subscribe((res)=>{  //board 컬렉션에 대해서 구독행위 시작
      console.log(res);
    });
  } 

  getItem(db_name : string){
    this.itemsCollection = this.DataBase.collection<any>(db_name, (ref : CollectionReference) => {
      return ref.orderBy('number','asc').startAt(1).limit(2);
    });
    return this.itemsCollection.valueChanges();
  }
}
