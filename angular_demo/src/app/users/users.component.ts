import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService, User } from '../data.service';
import { HeaderComponent } from '../header.component';
import { MenuComponent } from '../menu.component';
import { FooterComponent } from '../footer.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, FooterComponent, MenuComponent],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  username = '';
  password = '';
  error = '';
  success = '';
  dataService = inject(DataService);
  isAdmin = typeof window !== 'undefined' && localStorage.getItem('role') === 'admin';

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.dataService.getUsers().subscribe({
      next: (users: User[]) => { this.users = users; },
      error: () => { this.error = 'Failed to load users.'; }
    });
  }

  deleteUser(username: string) {
    this.dataService.deleteUser(username).subscribe({
      next: () => { this.success = 'User deleted.'; this.loadUsers(); },
      error: () => { this.error = 'Delete failed.'; }
    });
  }

  registerUser() {
    if (!this.username || !this.password) {
      this.error = 'Username and password required.';
      return;
    }
    this.dataService.registerUser(this.username, this.password).subscribe({
      next: () => {
        this.success = 'User registered.';
        this.error = '';
        this.username = '';
        this.password = '';
        this.loadUsers();
      },
      error: (err: any) => {
        this.error = err?.error?.message || 'Registration failed.';
        this.success = '';
      }
    });
  }
}
