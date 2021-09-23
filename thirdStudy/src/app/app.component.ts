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
    service.getItem("board")?.valueChanges({idField: 'idx'}).subscribe( arg => {  //idField값에 idx를 부여하였습니다.
      console.log(arg);
    });
    // service.updateData('board',{number:10, new_text:'hello updater'},'OHW97JhpZeCB6dEp7KXo');
    service.updateData3('board',{number:10, new_text:'hello updater'},'OHW97JhpZeCB6dEp7KXo');
  }  
}
