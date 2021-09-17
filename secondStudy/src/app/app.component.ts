import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginBool = true;
  boardBool = false;

  getEventThanks(event: any){
    console.log(event)
    if(event == true){
      this.loginBool = false;
      this.boardBool = true;
    }
  }
}