import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="app-header">
  <div class="header-bg" style="background: url('assets/header-bg.jpg') center/cover no-repeat; width: 100vw; height: 220px; display: flex; align-items: center; justify-content: center; margin: 0; box-shadow: none; border-radius: 0; padding: 0; position: relative; top: 0; left: 0;">
        <div class="header-content" style="background: rgba(25, 118, 210, 0.55); padding: 2.5rem 0; border-radius: 0; box-shadow: none; width: 100%; text-align: center; margin: 0 auto;">
          <h1 class="header-title" style="color: #fff; font-size: 2.5rem; font-weight: 700; margin-bottom: 0.5rem; margin-top: 0;">Angular Demo Site</h1>
          <p class="header-slogan" style="color: #e3f2fd; font-size: 1.3rem; margin-bottom: 0; margin-top: 0;">Making Cypress testing a reality</p>
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent {}
