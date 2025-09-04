import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <nav class="modern-nav top-nav">
      <div class="menu-links">
        <a routerLink="/home"><span class="menu-icon">🏠</span> Home</a>
  <a routerLink="/products"><span class="menu-icon">🛒</span> Products</a>
  <a routerLink="/forms"><span class="menu-icon">📝</span> Forms</a>
  <span *ngIf="isAdmin"><a routerLink="/admin"><span class="menu-icon">🔒</span> Admin</a></span>
      </div>
      <button class="logout-btn" (click)="logout()"><span class="menu-icon">🚪</span> Logout</button>
    </nav>
  `
})
export class MenuComponent {
  @Input() isAdmin: boolean = false;
  constructor(private router: Router) {}
  logout() {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.removeItem('currentUser');
      localStorage.removeItem('currentUserRole');
      this.router.navigate(['/login']);
    }
  }
}
