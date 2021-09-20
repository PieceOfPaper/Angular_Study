import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // @Input() visible1 : boolean = false;
  // @Output() sendMyEvent : EventEmitter<any> = new EventEmitter();
  id = new FormControl('');
  pwd= new FormControl('', [ Validators.required, Validators.minLength(4) ]);
  private message = '';

  private service: any;

  constructor(s : MyServiceService) { 
    this.service = s;
    console.log(this.service)
  }

  ngOnInit(): void {
  }

  styleArray = {'wrong_id':false, 'wrong_pwd':false};

  tryToLogin() : void{
    if(this.id.value =='admin' && this.pwd.value == '1234'){
      alert('로그인합니다!');
      this.service.addData(true, {id:'admin', name:'사용자'});
    } else if(this.id.value != 'admin'){
      this.setMessage = 'wrong id';
      this.styleArray.wrong_id = true;
      this.styleArray.wrong_pwd = false;
    } else if(this.pwd.value != '1234'){
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
