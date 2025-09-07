import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  username: string;
  password: string;
  role?: string;
  locked?: boolean;
  verified?: boolean;
}

export interface Product {
  id: number;
  name: string;
  price: number;
}

export interface Contact {
  id: number;
  name: string;
  email: string;
  owner?: string;
}

@Injectable({ providedIn: 'root' })
export class DataService {
  updateRole(username: string, role: string): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>(`${this.apiUrl}/update-role`, { username, role });
  }

  toggleVerify(username: string): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>(`${this.apiUrl}/toggle-verify`, { username });
  }

  getAuditLog(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/audit-log`);
  }

  getProfile(username: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/profile/${username}`);
  }

  exportUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/export`);
  }

  importUsers(users: User[]): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>(`${this.apiUrl}/import`, { users });
  }

  bulkDelete(usernames: string[]): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>(`${this.apiUrl}/bulk-delete`, { usernames });
  }

  bulkLock(usernames: string[], lock: boolean): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>(`${this.apiUrl}/bulk-lock`, { usernames, lock });
  }
  updateUser(user: User): Observable<{ success: boolean }> {
    return this.http.put<{ success: boolean }>(`${this.apiUrl}/users/${user.username}`, user);
  }

  resetPassword(username: string): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>(`${this.apiUrl}/reset-password`, { username });
  }

  toggleLock(username: string): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>(`${this.apiUrl}/toggle-lock`, { username });
  }
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3200/api';

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }

  deleteUser(username: string): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>(`${this.apiUrl}/delete`, { username });
  }

  registerUser(username: string, password: string): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>(`${this.apiUrl}/register`, { username, password });
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.apiUrl}/contacts`);
  }

  addContact(name: string, email: string, token: string): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>(`${this.apiUrl}/contacts`, { name, email, token });
  }

  updateContact(id: number, name: string, email: string, token: string): Observable<{ success: boolean }> {
    return this.http.put<{ success: boolean }>(`${this.apiUrl}/contacts/${id}`, { name, email, token });
  }

  deleteContact(id: number, token: string): Observable<{ success: boolean }> {
    return this.http.delete<{ success: boolean }>(`${this.apiUrl}/contacts/${id}`, { body: { token } });
  }

  getUser(username: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/${username}`);
  }

  addUser(username: string, password: string, role?: string): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>(`${this.apiUrl}/register`, { username, password, role });
  }
  clearAuditLog(): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>(`${this.apiUrl}/clear-audit-log`, {});
  }
}