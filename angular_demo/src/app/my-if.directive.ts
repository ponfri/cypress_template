import { Directive, Input, TemplateRef, ViewContainerRef, inject } from '@angular/core';

@Directive({
  selector: '[myIf]',
  standalone: true
})
export class MyIfDirective {
  private templateRef = inject(TemplateRef<unknown>);
  private viewContainer = inject(ViewContainerRef);

  @Input() set myIf(condition: boolean) {
    this.viewContainer.clear();
    if (condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
