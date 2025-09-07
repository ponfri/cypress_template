import { Directive, ElementRef, inject, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
    host: {
      '(mouseenter)': 'highlight(color || "#ffeeba")',
      '(mouseleave)': 'highlight("")'
    },
})
export class HighlightDirective {
  private el = inject(ElementRef);

  @Input('appHighlight') color?: string;

    highlight(color: string) {
      this.el.nativeElement.style.backgroundColor = color;
    }
}
