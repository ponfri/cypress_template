import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Contact {
  id: number;
  name: string;
  email: string;
  owner?: string;
}

@Injectable({ providedIn: 'root' })
export class ContactsService {
  private apiUrl = 'http://localhost:3200/api/contacts';

  constructor(private http: HttpClient) {}

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.apiUrl);
  }

  addContact(name: string, email: string, token: string): Observable<any> {
    return this.http.post(this.apiUrl, { name, email, token });
  }

  updateContact(id: number, name: string, email: string, token: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, { name, email, token });
  }

  deleteContact(id: number, token: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, { body: { token } });
  }
}
