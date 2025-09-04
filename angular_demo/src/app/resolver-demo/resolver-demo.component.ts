import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resolver-demo',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section>
      <h3>Route Resolver Demo</h3>
      <p>Resolved Data: {{ resolvedData }}</p>
    </section>
  `
})
export class ResolverDemoComponent {
  resolvedData = '';
  private route = inject(ActivatedRoute);
  constructor() {
    this.resolvedData = this.route.snapshot.data['demo'] || '';
  }
}
