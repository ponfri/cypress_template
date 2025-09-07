import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataService, User, Product, Contact } from './data.service';

const apiUrl = 'http://localhost:3200/api';

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    });
    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all users', () => {
    const mockUsers: User[] = [
      { username: 'user1', password: 'pass1', role: 'admin' },
      { username: 'user2', password: 'pass2', role: 'user' }
    ];
    service.getUsers().subscribe(users => {
      expect(users).toEqual(mockUsers);
    });
    const req = httpMock.expectOne(`${apiUrl}/users`);
    expect(req.request.method).toBe('GET');
    req.flush(mockUsers);
  });

  it('should fetch a single user', () => {
    const mockUser: User = { username: 'user1', password: 'pass1', role: 'admin' };
    service.getUser('user1').subscribe(user => {
      expect(user).toEqual(mockUser);
    });
    const req = httpMock.expectOne(`${apiUrl}/users/user1`);
    expect(req.request.method).toBe('GET');
    req.flush(mockUser);
  });

  it('should add a user', () => {
    service.addUser('user3', 'pass3', 'user').subscribe(res => {
      expect(res.success).toBeTrue();
    });
    const req = httpMock.expectOne(`${apiUrl}/register`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({ username: 'user3', password: 'pass3', role: 'user' });
    req.flush({ success: true });
  });

  it('should delete a user', () => {
    service.deleteUser('user1').subscribe(res => {
      expect(res.success).toBeTrue();
    });
    const req = httpMock.expectOne(`${apiUrl}/delete`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({ username: 'user1' });
    req.flush({ success: true });
  });

  it('should register a user', () => {
    service.registerUser('user4', 'pass4').subscribe(res => {
      expect(res.success).toBeTrue();
    });
    const req = httpMock.expectOne(`${apiUrl}/register`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({ username: 'user4', password: 'pass4' });
    req.flush({ success: true });
  });

  it('should fetch products', () => {
    const mockProducts: Product[] = [
      { id: 1, name: 'Product1', price: 10 },
      { id: 2, name: 'Product2', price: 20 }
    ];
    service.getProducts().subscribe(products => {
      expect(products).toEqual(mockProducts);
    });
    const req = httpMock.expectOne(`${apiUrl}/products`);
    expect(req.request.method).toBe('GET');
    req.flush(mockProducts);
  });

  it('should fetch contacts', () => {
    const mockContacts: Contact[] = [
      { id: 1, name: 'Contact1', email: 'c1@mail.com' },
      { id: 2, name: 'Contact2', email: 'c2@mail.com' }
    ];
    service.getContacts().subscribe(contacts => {
      expect(contacts).toEqual(mockContacts);
    });
    const req = httpMock.expectOne(`${apiUrl}/contacts`);
    expect(req.request.method).toBe('GET');
    req.flush(mockContacts);
  });

  it('should add a contact', () => {
    service.addContact('Contact3', 'c3@mail.com', 'token123').subscribe(res => {
      expect(res.success).toBeTrue();
    });
    const req = httpMock.expectOne(`${apiUrl}/contacts`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({ name: 'Contact3', email: 'c3@mail.com', token: 'token123' });
    req.flush({ success: true });
  });

  it('should update a contact', () => {
    service.updateContact(1, 'Contact1', 'c1@mail.com', 'token123').subscribe(res => {
      expect(res.success).toBeTrue();
    });
    const req = httpMock.expectOne(`${apiUrl}/contacts/1`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual({ name: 'Contact1', email: 'c1@mail.com', token: 'token123' });
    req.flush({ success: true });
  });

  it('should delete a contact', () => {
    service.deleteContact(1, 'token123').subscribe(res => {
      expect(res.success).toBeTrue();
    });
    const req = httpMock.expectOne(`${apiUrl}/contacts/1`);
    expect(req.request.method).toBe('DELETE');
    expect(req.request.body).toEqual({ token: 'token123' });
    req.flush({ success: true });
  });
});
