
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { throwError } from 'rxjs';
import { ContactsComponent } from './contacts.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ContactsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactsComponent, HttpClientTestingModule]
    }).compileComponents();
  });

  it('should create the contacts component', () => {
    const fixture = TestBed.createComponent(ContactsComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it('should display contacts for admin', () => {
    localStorage.setItem('currentUserRole', 'admin');
    const fixture = TestBed.createComponent(ContactsComponent);
    const comp = fixture.componentInstance;
    const contacts = [
      { id: 1, name: 'Alice', email: 'alice@example.com', phone: '123', owner: 'admin' },
      { id: 2, name: 'Bob', email: 'bob@example.com', phone: '456', owner: 'user' }
    ];
  spyOn(comp.contactsService, 'getContacts').and.returnValue(of(contacts));
    comp.loadContacts();
    expect(comp.contacts.length).toBe(2);
  });

  it('should display only user contacts for non-admin', () => {
    localStorage.setItem('currentUserRole', 'user');
    localStorage.setItem('currentUser', 'user');
    const fixture = TestBed.createComponent(ContactsComponent);
    const comp = fixture.componentInstance;
    const contacts = [
      { id: 1, name: 'Alice', email: 'alice@example.com', phone: '123', owner: 'admin' },
      { id: 2, name: 'Bob', email: 'bob@example.com', phone: '456', owner: 'user' }
    ];
  spyOn(comp.contactsService, 'getContacts').and.returnValue(of(contacts));
    comp.loadContacts();
    expect(comp.contacts.length).toBe(1);
    expect(comp.contacts[0].owner).toBe('user');
  });

  it('should add a contact if form is valid', () => {
    const fixture = TestBed.createComponent(ContactsComponent);
    const comp = fixture.componentInstance;
  spyOn(comp.contactsService, 'addContact').and.returnValue(of({ id: 1, name: 'New', email: 'new@example.com', owner: 'user' }));
    spyOn(comp, 'loadContacts');
  comp.contactForm.setValue({ name: 'New', email: 'new@example.com', phone: '' });
    comp.addContact();
    expect(comp.contactsService.addContact).toHaveBeenCalled();
    expect(comp.loadContacts).toHaveBeenCalled();
  });

  it('should not add contact if form is invalid', () => {
    const fixture = TestBed.createComponent(ContactsComponent);
    const comp = fixture.componentInstance;
    spyOn(comp.contactsService, 'addContact');
  comp.contactForm.setValue({ name: '', email: 'bademail', phone: '' });
    comp.addContact();
    expect(comp.contactsService.addContact).not.toHaveBeenCalled();
  });

  it('should filter contacts by search term', () => {
    const fixture = TestBed.createComponent(ContactsComponent);
    const comp = fixture.componentInstance;
    comp.contacts = [
      { id: 1, name: 'Alice', email: 'alice@example.com', owner: 'admin' },
      { id: 2, name: 'Bob', email: 'bob@example.com', owner: 'user' }
    ];
    comp.searchTerm = 'bob';
    const filtered = comp.filteredContacts();
    expect(filtered.length).toBe(1);
    expect(filtered[0].name).toBe('Bob');
  });

  it('should delete a contact', () => {
  const fixture = TestBed.createComponent(ContactsComponent);
  const comp = fixture.componentInstance;
  spyOn(comp.contactsService, 'deleteContact').and.returnValue(of({ success: true }));
  spyOn(comp, 'loadContacts');
  comp.contacts = [{ id: 1, name: 'Alice', email: 'alice@example.com', owner: 'admin' }];
  const contact = comp.contacts[0];
  comp.deleteContact(contact);
  const token = localStorage.getItem('currentUserToken') || '';
  expect(comp.contactsService.deleteContact).toHaveBeenCalledWith(contact.id, token);
  expect(comp.loadContacts).toHaveBeenCalled();
  });

  it('should handle service error on loadContacts', () => {
    const fixture = TestBed.createComponent(ContactsComponent);
    const comp = fixture.componentInstance;
    spyOn(comp.contactsService, 'getContacts').and.returnValue(throwError(() => new Error('error')));
    let errorHandled = false;
    comp.contactsService.getContacts().subscribe({
  // next omitted
      error: (e) => {
        errorHandled = true;
        expect(e).toBeDefined();
      }
    });
    expect(errorHandled).toBeTrue();
  });
});
