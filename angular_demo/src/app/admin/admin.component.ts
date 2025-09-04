
import { Component, inject } from '@angular/core';
import { DataService, User } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [],
  templateUrl: './admin.component.html'
})
export class AdminComponent {

  users: User[] = [];
  deleteMsg = '';

  dataService = inject(DataService);
  router = inject(Router);

  constructor() {
    this.loadUsers();
  }

  loadUsers() {
    this.dataService.getUsers().subscribe({
      next: (users: User[]) => { this.users = users; },
      error: () => { this.users = []; }
    });
  }

  get isMasterAdmin(): boolean {
    return localStorage.getItem('currentUser') === 'admin';
  }

  canDelete(user: User): boolean {
    if (this.isMasterAdmin) return true;
    return user.role !== 'admin';
  }

  deleteUser(user: User) {
    if (!this.canDelete(user)) {
      this.deleteMsg = 'You do not have permission to delete this account.';
      return;
    }
    this.dataService.deleteUser(user.username).subscribe({
      next: () => {
        this.deleteMsg = `Deleted user: ${user.username}`;
        this.loadUsers();
      },
      error: () => {
        this.deleteMsg = 'Delete failed.';
      }
    });
  }
}
