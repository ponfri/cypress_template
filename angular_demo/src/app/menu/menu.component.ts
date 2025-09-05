import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent {
  @Input() isAdmin = false;
  showDropdown = false;
  showPlaygroundsDropdown = false;
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
