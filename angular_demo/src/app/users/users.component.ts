import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService, User } from '../services/data.service';
import { MessageService } from '../services/message.service';
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  username = '';
  password = '';
  dataService = inject(DataService);
  messageService = inject(MessageService);
  message$ = this.messageService.message$;
  isAdmin = typeof window !== 'undefined' && localStorage.getItem('role') === 'admin';

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.dataService.getUsers().subscribe({
      next: (users: User[]) => { this.users = users; },
      error: () => { this.messageService.showMessage('Failed to load users.'); }
    });
  }

  deleteUser(username: string) {
    this.dataService.deleteUser(username).subscribe({
      next: () => {
        this.messageService.showMessage('User deleted.');
        this.loadUsers();
      },
      error: () => { this.messageService.showMessage('Delete failed.'); }
    });
  }

  registerUser() {
    if (!this.username || !this.password) {
      this.messageService.showMessage('Username and password required.');
      return;
    }
    this.dataService.registerUser(this.username, this.password).subscribe({
      next: () => {
        this.messageService.showMessage('User registered.');
        this.username = '';
        this.password = '';
        this.loadUsers();
      },
      error: (err: { error?: { message?: string } }) => {
        this.messageService.showMessage(err?.error?.message || 'Registration failed.');
      }
    });
  }
}
