import { Directive, ElementRef, Input } from '@angular/core';
import { HostListener } from '@angular/core';
@Directive({
  selector: '[appHelloworld]'
})
export class HelloworldDirective {

  @Input() colorCode: string = '';  //인풋!

  constructor(private el: ElementRef) {  //대상 엘리먼트(Html 테그, Html element)
    
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.changeCss(this.colorCode ? this.colorCode : '#9898ff');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.changeCss('');
  }

  private changeCss(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.fontWeight = color? 'bold': 'normal';
  }

}
