import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService, User } from './login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="login-bg">
      <div class="page-container login-container">
        <img src="assets/angular-icon-logo.png" alt="Angular Logo" style="width: 100px; display: block; margin-bottom: 1rem;" class="app-logo" />
        <h2 style="color:#1976d2;text-align:center;margin-bottom:1rem;">Welcome to the Angular Demo!</h2>
        <p style="text-align:center;color:#333;margin-bottom:2rem;font-size:1.1rem;">Sign in or create an account to explore all Angular features.</p>
        <form [formGroup]="loginForm" (ngSubmit)="onLogin()" style="margin-bottom:1.5rem;">
          <label>Username:<input formControlName="username" class="login-input" /></label><br />
          <label>Password:<input type="password" formControlName="password" class="login-input" /></label><br />
          <button type="submit" [disabled]="loginForm.invalid" class="login-btn">Login</button>
        </form>
        <div *ngIf="loginError" style="color:#d32f2f;text-align:center;">{{ loginError }}</div>
        <hr />
        <h2 style="color:#1976d2;text-align:center;margin-bottom:1rem;">Create Account</h2>
        <form [formGroup]="registerForm" (ngSubmit)="onRegister()">
          <label>Username:<input formControlName="username" class="login-input" /></label><br />
          <label>Password:<input type="password" formControlName="password" class="login-input" /></label><br />
          <button type="submit" [disabled]="registerForm.invalid" class="login-btn">Create Account</button>
        </form>
        <div *ngIf="registerError" style="color:#d32f2f;text-align:center;">{{ registerError }}</div>
        <div *ngIf="registerSuccess" style="color:#388e3c;text-align:center;">Account created! You can now log in.</div>
      </div>
    </div>
  `
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  registerForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  loginError = '';
  registerError = '';
  registerSuccess = false;

  constructor(private loginService: LoginService, private router: Router) {}

  onLogin() {
    const username = this.loginForm.value.username || '';
    const password = this.loginForm.value.password || '';
    console.log('[LOGIN ATTEMPT]', { username, password });
    this.loginService.login(username, password).subscribe({
      next: (res) => {
        console.log('[LOGIN SUCCESS]', res);
        this.loginError = '';
        localStorage.setItem('currentUser', res.user.username);
        localStorage.setItem('currentUserRole', res.user.role || 'user');
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error('[LOGIN ERROR]', err);
        this.loginError = err?.error?.message || 'Invalid username or password.';
      }
    });
  }

  onRegister() {
    const username = this.registerForm.value.username || '';
    const password = this.registerForm.value.password || '';
    this.loginService.register(username, password).subscribe({
      next: () => {
        this.registerError = '';
        this.registerSuccess = true;
      },
      error: (err) => {
        this.registerError = err?.error?.message || 'Registration failed.';
        this.registerSuccess = false;
      }
    });
  }
}
