import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DEMO_TOKEN } from './token-demo.token';

@Component({
  selector: 'app-token-demo',
  // ...existing code...
  imports: [CommonModule],
  providers: [
    { provide: DEMO_TOKEN, useValue: 'Injected value from DEMO_TOKEN!' }
  ],
  template: `
    <section>
      <h3>DI Token Demo</h3>
      <p>Injected Token Value: {{ value }}</p>
    </section>
  `
})
export class TokenDemoComponent {
  value = inject(DEMO_TOKEN);
}
