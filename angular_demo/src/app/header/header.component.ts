import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="app-header">
      <div class="header-bg">
        <div class="header-content">
          <h1 class="header-title">Angular Demo Site</h1>
          <p class="header-slogan">Making Cypress testing a reality</p>
          @if (subtitle()) {
            <span>{{ subtitle() }}</span>
          }
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent {
  subtitle = signal('Welcome to Angular 20 Best Practices!');
}
