import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {
  @Input('appCustom') appCustom: string;
  @Output('appCustomOutput') appCustomOutput = new EventEmitter<string>();;
  constructor(private el: ElementRef) { }
  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = 'gray';
    this.appCustomOutput.emit(this.appCustom.toLowerCase());
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = 'white';
    this.appCustomOutput.emit(this.appCustom.toUpperCase());
  }
}
