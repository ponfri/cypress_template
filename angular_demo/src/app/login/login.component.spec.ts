
import { TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { LoginComponent } from './login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LoginComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent, HttpClientTestingModule]
    }).compileComponents();
  });

  it('should create the login component', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it('should toggle login password visibility', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const comp = fixture.componentInstance;
    expect(comp.showLoginPassword).toBeFalse();
    comp.toggleLoginPassword();
    expect(comp.showLoginPassword).toBeTrue();
  });

  it('should toggle register password visibility', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const comp = fixture.componentInstance;
    expect(comp.showRegisterPassword).toBeFalse();
    comp.toggleRegisterPassword();
    expect(comp.showRegisterPassword).toBeTrue();
  });

  it('should login and navigate to home', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const comp = fixture.componentInstance;
    comp.loginForm.setValue({ username: 'user', password: 'pass' });
    spyOn(comp.loginService, 'login').and.returnValue(of({ user: { username: 'user', role: 'admin' } }));
    spyOn(comp.router, 'navigate');
    spyOn(comp.messageService, 'clearMessage');
    comp.onLogin();
    expect(localStorage.getItem('currentUser')).toBe('user');
    expect(localStorage.getItem('currentUserRole')).toBe('admin');
    expect(comp.router.navigate).toHaveBeenCalledWith(['/home']);
    expect(comp.messageService.clearMessage).toHaveBeenCalled();
  });

  it('should show error on failed login', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const comp = fixture.componentInstance;
    comp.loginForm.setValue({ username: 'user', password: 'wrong' });
    spyOn(comp.loginService, 'login').and.returnValue(throwError(() => ({ error: { message: 'fail' } })));
    spyOn(comp.messageService, 'showMessage');
    comp.onLogin();
    expect(comp.messageService.showMessage).toHaveBeenCalledWith('fail', 5000);
  });

  it('should register and login', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const comp = fixture.componentInstance;
    comp.registerForm.setValue({ username: 'new', password: 'pass', role: 'user' });
    spyOn(comp.loginService, 'register').and.returnValue(of({ success: true }));
    spyOn(comp.loginService, 'login').and.returnValue(of({ user: { username: 'new', role: 'user' } }));
    spyOn(comp.router, 'navigate');
    spyOn(comp.messageService, 'clearMessage');
    comp.onRegister();
    expect(localStorage.getItem('currentUser')).toBe('new');
    expect(localStorage.getItem('currentUserRole')).toBe('user');
    expect(comp.router.navigate).toHaveBeenCalledWith(['/home']);
    expect(comp.messageService.clearMessage).toHaveBeenCalled();
  });

  it('should show error on failed registration', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const comp = fixture.componentInstance;
    comp.registerForm.setValue({ username: 'new', password: 'pass', role: 'user' });
    spyOn(comp.loginService, 'register').and.returnValue(throwError(() => ({ error: { message: 'fail' } })));
    spyOn(comp.messageService, 'showMessage');
    comp.onRegister();
    expect(comp.messageService.showMessage).toHaveBeenCalledWith('fail', 5000);
  });

  it('should show error on failed login after registration', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const comp = fixture.componentInstance;
    comp.registerForm.setValue({ username: 'new', password: 'pass', role: 'user' });
    spyOn(comp.loginService, 'register').and.returnValue(of({ success: true }));
    spyOn(comp.loginService, 'login').and.returnValue(throwError(() => ({ error: { message: 'login fail' } })));
    spyOn(comp.messageService, 'showMessage');
    comp.onRegister();
    expect(comp.messageService.showMessage).toHaveBeenCalledWith('login fail', 5000);
  });
});
