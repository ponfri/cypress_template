

import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, CommonModule } from '@angular/common';
import { DataService, User } from '../services/data.service';
import { Router } from '@angular/router';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule, AsyncPipe, CommonModule],
  templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit {
  dataService = inject(DataService);
  router = inject(Router);
  messageService = inject(MessageService);
  message$ = this.messageService.message$;
  bulkSelected = new Set<string>();
  auditLog: string[] = [];
  auditLogVisible = false;
  profileUser: User | null = null;
  profileOpen = false;
  editUser: User | null = null;
  users: User[] = [];
  filteredUsers: User[] = [];
  newUser: Partial<User> = { username: '', password: '', role: 'user' };
  queryUsername = '';
  querySubmitted = false;

  get isAdmin(): boolean {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      return localStorage.getItem('currentUserRole') === 'admin';
    }
    return false;
  }

  get isMasterAdmin(): boolean {
    return localStorage.getItem('currentUser') === 'admin';
  }

  ngOnInit() {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
      this.router.navigate(['/login']);
      return;
    }
    this.loadUsers();
  }

  clearAuditLog() {
    this.dataService.clearAuditLog().subscribe({
      next: () => {
        this.auditLog = [];
        this.auditLogVisible = false;
        this.messageService.showMessage('Audit log cleared.');
      },
      error: () => {
        this.messageService.showMessage('Failed to clear audit log.');
      }
    });
  }

  toggleBulkAll(checked: boolean) {
    if (checked) {
      this.bulkSelected = new Set(this.filteredUsers.map(u => u.username));
    } else {
      this.bulkSelected.clear();
    }
  }

  startEdit(user: User) {
    this.editUser = { ...user };
    this.messageService.clearMessage();
  }

  viewProfile(user: User) {
    this.dataService.getProfile(user.username).subscribe({
      next: (profile) => {
        this.profileUser = profile;
        this.profileOpen = true;
      },
      error: () => {
        this.profileUser = null;
        this.profileOpen = false;
      }
    });
  }

  closeProfile() {
    this.profileOpen = false;
    this.profileUser = null;
  }

  updateRole(user: User, role: string) {
    this.dataService.updateRole(user.username, role).subscribe({
      next: (res) => {
        this.messageService.showMessage(res.success ? 'Role updated.' : 'Role update failed.');
        this.loadUsers();
      },
      error: () => {
        this.messageService.showMessage('Role update failed.');
      }
    });
  }

  toggleVerify(user: User) {
    this.dataService.toggleVerify(user.username).subscribe({
      next: (res) => {
        this.messageService.showMessage(res.success ? 'Verification toggled.' : 'Action failed.');
        this.loadUsers();
      },
      error: () => {
        this.messageService.showMessage('Action failed.');
      }
    });
  }

  loadAuditLog() {
    this.dataService.getAuditLog().subscribe({
      next: (log) => {
        this.auditLog = log;
        this.auditLogVisible = true;
      },
      error: () => {
        this.auditLog = [];
        this.auditLogVisible = true;
      }
    });
  }

  exportUsers() {
    this.dataService.exportUsers().subscribe({
      next: (users) => {
        const blob = new Blob([JSON.stringify(users, null, 2)], { type: 'application/json' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'users.json';
        a.click();
        window.URL.revokeObjectURL(url);
        this.messageService.showMessage('Exported.');
      },
      error: () => {
        this.messageService.showMessage('Export failed.');
      }
    });
  }

  importUsers(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const users = JSON.parse(reader.result as string);
        this.dataService.importUsers(users).subscribe({
          next: (res) => {
            this.messageService.showMessage(res.success ? 'Imported.' : 'Import failed.');
            this.loadUsers();
          },
          error: () => {
            this.messageService.showMessage('Import failed.');
          }
        });
      } catch {
        this.messageService.showMessage('Invalid file.');
      }
    };
    reader.readAsText(file);
  }

  toggleBulk(username: string, checked: boolean) {
    if (checked) this.bulkSelected.add(username);
    else this.bulkSelected.delete(username);
  }

  bulkDelete() {
    if (this.bulkSelected.size === 0) return;
    this.dataService.bulkDelete(Array.from(this.bulkSelected)).subscribe({
      next: (res) => {
        this.messageService.showMessage(res.success ? 'Bulk deleted.' : 'Bulk delete failed.');
        this.showAllUsers();
        this.bulkSelected.clear();
      },
      error: () => {
        this.messageService.showMessage('Bulk delete failed.');
      }
    });
  }

  bulkLock(lock: boolean) {
    if (this.bulkSelected.size === 0) return;
    this.dataService.bulkLock(Array.from(this.bulkSelected), lock).subscribe({
      next: (res) => {
        this.messageService.showMessage(res.success ? (lock ? 'Bulk locked.' : 'Bulk unlocked.') : 'Bulk action failed.');
        this.showAllUsers();
        this.bulkSelected.clear();
      },
      error: () => {
        this.messageService.showMessage('Bulk action failed.');
      }
    });
  }

  saveEdit() {
    if (!this.editUser) return;
    this.dataService.updateUser(this.editUser).subscribe({
      next: (res) => {
        this.messageService.showMessage(res.success ? 'User updated.' : 'Update failed.');
        const currentUser = localStorage.getItem('currentUser');
        if (currentUser && this.editUser!.username === currentUser) {
          localStorage.setItem('currentUserRole', this.editUser!.role || 'user');
        }
        this.filteredUsers = [{ ...this.editUser! }];
        this.queryUsername = this.editUser!.username;
        this.querySubmitted = true;
        this.editUser = null;
        this.loadUsers();
      },
      error: () => {
        this.messageService.showMessage('Update failed.');
      }
    });
  }

  cancelEdit() {
    this.editUser = null;
    this.messageService.clearMessage();
  }

  resetPassword(user: User) {
    this.dataService.resetPassword(user.username).subscribe({
      next: (res) => {
        this.messageService.showMessage(res.success ? 'Password reset.' : 'Reset failed.');
      },
      error: () => {
        this.messageService.showMessage('Reset failed.');
      }
    });
  }

  toggleLock(user: User) {
    this.dataService.toggleLock(user.username).subscribe({
      next: (res) => {
        this.messageService.showMessage(res.success ? (user.locked ? 'Unlocked.' : 'Locked.') : 'Action failed.');
        this.loadUsers();
      },
      error: () => {
        this.messageService.showMessage('Action failed.');
      }
    });
  }

  clearQuery() {
    this.queryUsername = '';
    this.filteredUsers = [];
    this.querySubmitted = false;
    this.messageService.clearMessage();
  }

  loadUsers() {
    this.dataService.getUsers().subscribe({
      next: (users: User[]) => {
        this.users = users;
      },
      error: () => {
        this.users = [];
        this.filteredUsers = [];
      }
    });
  }

  showAllUsers() {
    this.filteredUsers = [...this.users];
    this.queryUsername = '';
  }

  addUser() {
    if (!this.newUser.username || !this.newUser.password) {
      this.messageService.showMessage('Username and password required.');
      return;
    }
    this.dataService.addUser(
      this.newUser.username!,
      this.newUser.password!,
      this.newUser.role
    ).subscribe({
      next: (res) => {
        this.messageService.showMessage(res.success ? 'User added.' : 'Add failed.');
        this.loadUsers();
      },
      error: () => {
        this.messageService.showMessage('Add failed.');
      }
    });
  }

  queryUser() {
    if (!this.queryUsername || this.queryUsername.trim() === '') {
      this.messageService.showMessage('Please enter a username or partial name to run a query.');
      this.querySubmitted = true;
      this.filteredUsers = [];
      return;
    }
    this.querySubmitted = true;
    if (this.queryUsername.trim().toLowerCase() === 'all') {
      this.showAllUsers();
      return;
    }
    this.dataService.getUsers().subscribe({
      next: (users: User[]) => {
        this.filteredUsers = users.filter(u => u.username.toLowerCase().includes(this.queryUsername.trim().toLowerCase()));
        if (this.filteredUsers.length === 0) {
          this.messageService.showMessage('No users found.');
        } else {
          this.messageService.clearMessage();
        }
      },
      error: () => {
        this.filteredUsers = [];
        this.messageService.showMessage('Query failed.');
      }
    });
  }

  onQueryInput() {
    this.querySubmitted = false;
    this.messageService.clearMessage();
  }

  canDelete(user: User): boolean {
    if (this.isMasterAdmin) return true;
    return user.role !== 'admin';
  }


  deleteUser(user: User) {
    if (!this.canDelete(user)) {
      this.messageService.showMessage('You do not have permission to delete this account.');
      return;
    }
    this.dataService.deleteUser(user.username).subscribe({
      next: () => {
        this.messageService.showMessage(`Deleted user: ${user.username}`);
        this.showAllUsers();
      },
      error: () => {
        this.messageService.showMessage('Delete failed.');
      }
    });
  }
}
