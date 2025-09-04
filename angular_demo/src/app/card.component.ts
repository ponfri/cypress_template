import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  template: `
    <div style="border:1px solid #ccc;padding:1rem;margin:1rem 0;background:#fafafa;">
      <ng-content></ng-content>
    </div>
  `
})
export class CardComponent {}
