import { Component, OnInit } from '@angular/core';
import { AskService } from '../ask.service';
import { Router } from '@angular/router';

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

  login() {
    this.service.tryToLogin({id : this.id, passwd : this.passwd}).subscribe( (arg:any)=>{
      console.log(arg);
      if(arg.status == true){
        alert('로그인 성공!')
        this.rout.navigate(['/board']);
      }
    });
  }
}
