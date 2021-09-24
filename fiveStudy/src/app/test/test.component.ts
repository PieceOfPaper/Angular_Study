import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  test_name : any;

  constructor() { }

  ngOnInit(): void {
  }

  test(){  //test_name값을 변경하는 함수 입니다.
    if(this.test_name){
      this.test_name = null
    } else {
      this.test_name = 'hello';
    }
  }

  getEvent(event : any){  //alert모듈으로부터 받은 내용입니다.
    console.log('alert 모듈한테 받았습니다 : ',event);
  }
}
