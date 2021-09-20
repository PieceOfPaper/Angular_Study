import { Component, OnInit } from '@angular/core';

import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  builder : FormBuilder;
  rows: FormArray;
  formGrp : FormGroup;
  single : FormControl;

  constructor(fb : FormBuilder) {  //FormBuilder를 주입받습니다.
    this.builder = fb;
    this.rows = this.builder.array([]);  //주입받은 FormBuilder를 통해서 배열 형태로 값을 담을 변수를 만들어줍니다.
    this.single = new FormControl('Title', Validators.required);  //1개의 데이터에 바인딩할 대상 입니다.
    this.formGrp  = this.builder.group({'row_data':this.rows, 'single_data' : this.single});   //rows와 single을 담을 그룹입니다.
  }

  ngOnInit(): void {
    for(var i = 0;i < 10;i++){
      var group = this.builder.group({  //배열에 담을 group을 생성합니다.
        text : this.builder.control('abcd'+i, Validators.minLength(5)),   //control 함수는 FormControl을 만드는 역할을 합니다. 
        number: this.builder.control(i, Validators.required)
      });
      this.rows.push(group);
    }
  }

  showData(arg?: any){
    if(arg){
      console.log(arg);
    } else {
      console.log(this.formGrp);
    }
  }
}
