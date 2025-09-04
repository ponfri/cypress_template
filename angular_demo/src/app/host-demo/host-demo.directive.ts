import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHostDemo]',
  standalone: true
})
export class HostDemoDirective {
  @HostBinding('style.backgroundColor') bg = '';
  @HostBinding('class.active') isActive = false;

  @HostListener('mouseenter') onEnter() {
    this.bg = '#ffe082';
    this.isActive = true;
  }
  @HostListener('mouseleave') onLeave() {
    this.bg = '';
    this.isActive = false;
  }
}
