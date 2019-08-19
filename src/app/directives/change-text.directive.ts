import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appChangeText]'
})
export class ChangeTextDirective {
  @Input('appContent') content: string;
  nativeElement;

  constructor(
    el: ElementRef
  ) {
    this.nativeElement = el.nativeElement;
    el.nativeElement.style.backgroundColor = 'black'
    el.nativeElement.style.color = 'white'
  }

  ngOnChanges(){
    this.nativeElement.innerHTML = this.content;
  }

}
