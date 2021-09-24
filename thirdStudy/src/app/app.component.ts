import { Component } from '@angular/core';
import { AskService } from './ask.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'thirdStudy';

  constructor(private service : AskService, public auth: AngularFireAuth) {

    //권한 수준을 높이는 경우에 대한 대비
    // this.auth.user.subscribe(arg => {
    //   if (arg == undefined || arg == null) {
    //     this.auth.signInWithEmailAndPassword('구글메일주소', '메일 비밀번호').then(res => {
    //       console.log(res);
    //       //쓰기, 수정, 삭제등 행위 입력
    //     })
    //   } else {
    //       //쓰기, 수정, 삭제등 행위 입력
    //   }
    // });

    service.getItem("board")?.valueChanges({idField: 'idx'}).subscribe( arg => {  //idField값에 idx를 부여하였습니다.
      console.log(arg);
    });
    
    // service.updateData('board',{number:10, new_text:'hello updater'},'OHW97JhpZeCB6dEp7KXo');
    service.updateData3('board',{number:10, new_text:'hello updater'},'OHW97JhpZeCB6dEp7KXo');
  }  
}
