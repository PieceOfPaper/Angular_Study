import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';  //추가
import { my_check } from './my-check.directive';
import {bigSmall} from './bigSmall';  //분리한 ts파일이 있는 위치
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    bigSmall,
  ], 
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = new FormControl('', my_check()); 

  constructor(private http: HttpClient){
    this.http.post('/data/',{param : 'request param'}).subscribe( arg=>{
      console.log(arg);
    })
  }
  
  private canElementMove = false;  //마우스의 상태를 나타내는 변수 입니다.

  position = {
    left : '0px',
    top : '0px',
    width : '200px',
    height : '200px',
    border : '1px solid gray',
    position : 'absolute'
  };

  set mouseStatus(arg : any){  //마우스의 상태가 변화됨을 적용하는 함수 입니다.
    this.canElementMove = arg;
  }

  getEvent(event : any) : void{
    if(this.canElementMove){
      //console.log(event)
      this.position.left = event.clientX - 100  + 'px';
      this.position.top = event.clientY - 100   + 'px';
    }
  }

  //에니메이션 -------------------------
  isOpen = true;  //상태값

  //버튼이벤트
  trigger() {
    this.isOpen = !this.isOpen;
  }
}
