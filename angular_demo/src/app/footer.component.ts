import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="app-footer">
      <div>
        <span>© 2025 Angular Demo App</span>
  <span style="margin-left:2rem;">Contact: support&#64;angulardemo.com</span>
        <span style="margin-left:2rem;">Powered by Angular</span>
      </div>
      <div style="margin-top:0.5rem;font-size:0.95rem;color:#888;">
        <a href="#" style="color:#1976d2;text-decoration:none;margin-right:1rem;">Privacy Policy</a>
        <a href="#" style="color:#1976d2;text-decoration:none;">Terms of Service</a>
      </div>
    </footer>
  `
})
export class FooterComponent {}
