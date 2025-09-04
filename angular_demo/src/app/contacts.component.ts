import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { ContactsService, Contact } from './contacts.service';
import { FooterComponent } from './footer.component';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, FooterComponent],
  template: `
    <div class="login-bg">
  <img src="assets/img/angular-icon-logo.png" alt="Angular Logo" class="app-logo" />
      <div class="page-container">
        <h2 style="color:#1976d2;text-align:center;">Contacts</h2>
        <form [formGroup]="contactForm" (ngSubmit)="addContact()" style="margin-bottom:1.5rem;">
          <label>Name:<input formControlName="name" class="login-input" /></label><br />
          <label>Email:<input formControlName="email" class="login-input" /></label><br />
          <label>Phone:<input formControlName="phone" class="login-input" /></label><br />
          <button type="submit" [disabled]="contactForm.invalid" class="login-btn">Add Contact</button>
        </form>
        <input [(ngModel)]="searchTerm" placeholder="Search contacts..." class="login-input" style="margin-bottom:1rem;" />
        <ul style="list-style:none;padding:0;">
          <li *ngFor="let contact of filteredContacts()" style="margin-bottom:1rem;padding:1rem;background:#f5f5f5;border-radius:8px;box-shadow:0 1px 4px rgba(25,118,210,0.06);">
            <strong>{{ contact.name }}</strong> <span style="color:#1976d2;">({{ contact.email }})</span>
            <button class="login-btn" style="float:right;" (click)="deleteContact(contact)">Delete</button>
          </li>
        </ul>
    <app-footer></app-footer>
      </div>
    </div>
  `
})
export class ContactsComponent {
  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('')
  });
  searchTerm = '';
  contacts: Contact[] = [];
  user: string = localStorage.getItem('currentUser') || '';
  isAdmin: boolean = localStorage.getItem('currentUserRole') === 'admin';

  constructor(private contactsService: ContactsService) {
    this.loadContacts();
  }

  loadContacts() {
    this.contactsService.getContacts().subscribe((contacts: Contact[]) => {
      if (this.isAdmin) {
        this.contacts = contacts;
      } else {
        this.contacts = contacts.filter(c => c.owner === this.user);
      }
    });
  }

  addContact() {
    if (this.contactForm.valid) {
      const name = this.contactForm.value.name || '';
      const email = this.contactForm.value.email || '';
      const token = localStorage.getItem('currentUserToken') || '';
      this.contactsService.addContact(name, email, token).subscribe({
        next: () => {
          this.loadContacts();
          this.contactForm.reset();
        }
      });
    }
  }

  deleteContact(contact: Contact) {
    const token = localStorage.getItem('currentUserToken') || '';
    this.contactsService.deleteContact(contact.id, token).subscribe({
      next: () => this.loadContacts()
    });
  }

  filteredContacts(): Contact[] {
    if (!this.searchTerm) return this.contacts;
    const term = this.searchTerm.toLowerCase();
    return this.contacts.filter(c =>
      c.name.toLowerCase().includes(term) ||
      c.email.toLowerCase().includes(term)
    );
  }
}
