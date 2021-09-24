import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';  //추가
import { my_check } from './my-check.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = new FormControl('', my_check()); 
  
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
}
