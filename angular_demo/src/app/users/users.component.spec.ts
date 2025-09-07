
import { TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { UsersComponent } from './users.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UsersComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersComponent, HttpClientTestingModule]
    }).compileComponents();
  });

  it('should create the users component', () => {
    const fixture = TestBed.createComponent(UsersComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it('should load users on init', () => {
    const fixture = TestBed.createComponent(UsersComponent);
    const comp = fixture.componentInstance;
    const users = [{ username: 'a', password: '', role: 'user' }];
  spyOn(comp.dataService, 'getUsers').and.returnValue(of(users));
    comp.ngOnInit();
    expect(comp.users).toEqual(users);
  });

  it('should show error if load users fails', () => {
    const fixture = TestBed.createComponent(UsersComponent);
    const comp = fixture.componentInstance;
  spyOn(comp.dataService, 'getUsers').and.returnValue(throwError(() => new Error('fail')));
    spyOn(comp.messageService, 'showMessage');
    comp.loadUsers();
    expect(comp.messageService.showMessage).toHaveBeenCalledWith('Failed to load users.');
  });

  it('should delete user and reload', () => {
    const fixture = TestBed.createComponent(UsersComponent);
    const comp = fixture.componentInstance;
  spyOn(comp.dataService, 'deleteUser').and.returnValue(of({ success: true }));
    spyOn(comp, 'loadUsers');
    spyOn(comp.messageService, 'showMessage');
    comp.deleteUser('a');
    expect(comp.messageService.showMessage).toHaveBeenCalledWith('User deleted.');
    expect(comp.loadUsers).toHaveBeenCalled();
  });

  it('should show error if delete user fails', () => {
    const fixture = TestBed.createComponent(UsersComponent);
    const comp = fixture.componentInstance;
  spyOn(comp.dataService, 'deleteUser').and.returnValue(throwError(() => new Error('fail')));
    spyOn(comp.messageService, 'showMessage');
    comp.deleteUser('a');
    expect(comp.messageService.showMessage).toHaveBeenCalledWith('Delete failed.');
  });

  it('should register user and reload', () => {
    const fixture = TestBed.createComponent(UsersComponent);
    const comp = fixture.componentInstance;
    comp.username = 'new';
    comp.password = 'pass';
  spyOn(comp.dataService, 'registerUser').and.returnValue(of({ success: true }));
    spyOn(comp, 'loadUsers');
    spyOn(comp.messageService, 'showMessage');
    comp.registerUser();
    expect(comp.messageService.showMessage).toHaveBeenCalledWith('User registered.');
    expect(comp.username).toBe('');
    expect(comp.password).toBe('');
    expect(comp.loadUsers).toHaveBeenCalled();
  });

  it('should show error if username or password missing on register', () => {
    const fixture = TestBed.createComponent(UsersComponent);
    const comp = fixture.componentInstance;
    comp.username = '';
    comp.password = '';
    spyOn(comp.messageService, 'showMessage');
    comp.registerUser();
    expect(comp.messageService.showMessage).toHaveBeenCalledWith('Username and password required.');
  });

  it('should show error if register fails', () => {
    const fixture = TestBed.createComponent(UsersComponent);
    const comp = fixture.componentInstance;
    comp.username = 'new';
    comp.password = 'pass';
  spyOn(comp.dataService, 'registerUser').and.returnValue(throwError(() => ({ error: { message: 'fail' } })));
    spyOn(comp.messageService, 'showMessage');
    comp.registerUser();
    expect(comp.messageService.showMessage).toHaveBeenCalledWith('fail');
  });

  it('should check admin status', () => {
  localStorage.setItem('currentUserRole', 'admin');
  localStorage.setItem('role', 'admin');
  const fixture = TestBed.createComponent(UsersComponent);
  const comp = fixture.componentInstance;
  fixture.detectChanges();
  expect(comp.isAdmin).toBeTrue();
  });
});
