
import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="modern-nav top-nav">
      <div class="menu-links">
        <a routerLink="/home"><span class="menu-icon">🏠</span> Home</a>
        <a routerLink="/products"><span class="menu-icon">🛒</span> Products</a>
        <a routerLink="/forms"><span class="menu-icon">📝</span> Forms</a>
        @if (isAdmin) {
          <span><a routerLink="/admin"><span class="menu-icon">🔒</span> Admin</a></span>
        }
      </div>
      <button class="logout-btn" (click)="logout()"><span class="menu-icon">🚪</span> Logout</button>
    </nav>
    `
})
export class MenuComponent {
  @Input() isAdmin = false;
  router = inject(Router);
  // Removed empty constructor
  logout() {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.removeItem('currentUser');
      localStorage.removeItem('currentUserRole');
      this.router.navigate(['/login']);
    }
  }
}
