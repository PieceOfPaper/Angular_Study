import { Component } from '@angular/core';
import { AskService } from './ask.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'thirdStudy';

  constructor(private service : AskService) {
    service.getItem("board")?.valueChanges().subscribe( arg => {
      console.log(arg);
    });

    service.testPipeTake();  //추가!
  }  
}
