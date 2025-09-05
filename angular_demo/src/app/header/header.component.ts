import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  styleUrls: ['./header.component.scss'],
  template: `
    <header class="app-header">
      <div class="header-bg">
        <div class="header-content">
          <h1 class="header-title">Angular Demo Site</h1>
          <p class="header-slogan">Making Cypress testing a reality</p>
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent {}
