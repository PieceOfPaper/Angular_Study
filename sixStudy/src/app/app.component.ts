import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';  //추가
import { my_check } from './my-check.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = new FormControl('', my_check()); 
}
