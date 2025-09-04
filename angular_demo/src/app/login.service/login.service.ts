import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  username: string;
  password: string;
  role?: string;
}

@Injectable({ providedIn: 'root' })
export class LoginService {
  private apiUrl = 'http://localhost:3200/api';

  private http = inject(HttpClient);

  login(username: string, password: string): Observable<{ user: { username: string; role: string } }> {
    return this.http.post<{ user: { username: string; role: string } }>(`${this.apiUrl}/login`, { username, password });
  }

  register(username: string, password: string, role = 'user'): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>(`${this.apiUrl}/register`, { username, password, role });
  }

  delete(username: string): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>(`${this.apiUrl}/delete`, { username });
  }
}
