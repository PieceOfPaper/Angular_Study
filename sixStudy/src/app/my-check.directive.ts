import { Directive } from '@angular/core';
import { AbstractControl, ValidatorFn, NG_VALIDATORS, Validator } from '@angular/forms';

export function my_check(): ValidatorFn {  
  return (control: AbstractControl): { [key: string]: any } | null =>    //함수 반환
      control.value?.toLowerCase() !== 'admin' ? null : { wrongID: control.value  //admin이라는 텍스트 값이 들어온 경우
  };
}

//디렉티브로 export
@Directive({
  selector: '[my_check]',  
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: MyCheckDirective,
    multi: true
}]  
})
export class MyCheckDirective {

  constructor() { }

  validate(control: AbstractControl): { [key: string]: any } | null { 
    return my_check()(control);  
  }
}
