import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  username: string;
  password: string;
  role?: string;
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
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3200/api';

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }

  deleteUser(username: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/delete`, { username });
  }

  registerUser(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, { username, password });
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.apiUrl}/contacts`);
  }

  addContact(name: string, email: string, token: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/contacts`, { name, email, token });
  }

  updateContact(id: number, name: string, email: string, token: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/contacts/${id}`, { name, email, token });
  }

  deleteContact(id: number, token: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/contacts/${id}`, { body: { token } });
  }
}
