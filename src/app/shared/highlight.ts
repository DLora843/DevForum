import { Directive,HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class Highlight {
  @HostBinding('style.backgroundColor') backgroundColor : string = 'white';
  @HostBinding('style.color') color : string = 'gray';

  @HostListener('mouseenter') onMouseEnter() {
    this.color = 'blue';
    this.backgroundColor = 'pink';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = 'white';
    this.color = 'gray';
  }

}
