import { Injectable, inject } from '@angular/core';
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

  private http = inject(HttpClient);

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.apiUrl);
  }

  addContact(name: string, email: string, token: string): Observable<Contact> {
    return this.http.post<Contact>(this.apiUrl, { name, email, token });
  }

  updateContact(id: number, name: string, email: string, token: string): Observable<Contact> {
    return this.http.put<Contact>(`${this.apiUrl}/${id}`, { name, email, token });
  }

  deleteContact(id: number, token: string): Observable<{ success: boolean }> {
    return this.http.delete<{ success: boolean }>(`${this.apiUrl}/${id}`, { body: { token } });
  }
}
