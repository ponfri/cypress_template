import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './menu.component.html'
})
export class MenuComponent {
  @Input() isAdmin = false;
  showDropdown = false;
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
