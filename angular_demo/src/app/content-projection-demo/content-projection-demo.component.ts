import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-projection',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="border:1px solid #ccc;padding:1rem;">
      <ng-content select="[content]"></ng-content>
    </div>
  `
})
export class CardProjectionComponent {}

@Component({
  selector: 'app-content-projection-demo',
  standalone: true,
  imports: [CommonModule, CardProjectionComponent],
  template: `
    <section>
      <h3>Content Projection Demo</h3>
      <app-card-projection>
        <span content>Projected content goes here!</span>
      </app-card-projection>
    </section>
  `
})
export class ContentProjectionDemoComponent {}
