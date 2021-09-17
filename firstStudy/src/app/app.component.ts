import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  id : string = "";
  pwd : string = "";  
  visible : boolean = true;
  visible1 : boolean = false;
  visible2 : boolean = false;

  tryToLogin() : void{
    console.log(this.id, this.pwd);
    if(this.id =='admin' && this.pwd == '1234'){
      this.visible = false;
      this.visible1 = true;
    } else if(this.id =='root' && this.pwd == '1234'){
      this.visible = false;
      this.visible2 = true;
    }     
  }
}