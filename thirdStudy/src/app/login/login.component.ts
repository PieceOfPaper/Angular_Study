import { Component, OnInit } from '@angular/core';
import { AskService } from '../ask.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  id : string = '';
  passwd : string = '';

  constructor(private service : AskService, private rout: Router) { 
  }

  ngOnInit(): void {
 
  }

  private script : Subscription | undefined;

  login() {
    if(this.script){
      console.log(this.script);
      this.script.unsubscribe();  //구독 종료
    }
    this.script = this.service.tryToLogin({id : this.id, passwd : this.passwd}).subscribe( (arg:any)=>{
      if(arg.status == true){
        alert('로그인 성공!')
        this.rout.navigate(['/board']);
      }
    });
  }
  ngOnDestroy(): void {
    console.log(this.script);
    if(this.script){
      this.script.unsubscribe(); //구독 종료
    }
  }
}
