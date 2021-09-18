import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() visible1 : boolean = false;
  @Output() sendMyEvent : EventEmitter<any> = new EventEmitter();
  id :string = '';
  pwd : string = '';
  private message = '';

  constructor() { }

  ngOnInit(): void {
  }

  styleArray = {'wrong_id':false, 'wrong_pwd':false};

  tryToLogin() : void{
    if(this.id =='admin' && this.pwd == '1234'){
      alert('로그인합니다!');
      this.visible1 = true;
      this.sendMyEvent.emit(this.visible1);
    } else if(this.id != 'admin'){
      this.setMessage = 'wrong id';
      this.styleArray.wrong_id = true;
      this.styleArray.wrong_pwd = false;
    } else if(this.pwd != '1234'){
      this.setMessage = 'wrong pwd';
      this.styleArray.wrong_id = false;
      this.styleArray.wrong_pwd = true;
    } 
  }

  set setMessage(arg: any){
    this.message = arg;
  } 

  get getMessage() : any{
    return this.message;
  }
}
