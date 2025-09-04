import { Injectable } from '@angular/core';
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

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { username, password });
  }

  register(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, { username, password });
  }

  delete(username: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/delete`, { username });
  }
}
