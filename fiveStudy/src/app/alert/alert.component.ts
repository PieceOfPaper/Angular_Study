import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input() name : any;  //들어온 데이터
  @Output() sendToEvent = new EventEmitter<any>();  //보낼 데이터


  constructor() { }

  ngOnInit(): void {

  }

  //콜백용 함수, 이벤트 전달
  toastEvent(){
    this.sendToEvent.emit({text:'abcd', number : 1234});
  }
}
