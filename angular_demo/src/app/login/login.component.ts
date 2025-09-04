
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  showLoginPassword = false;
  showRegisterPassword = false;
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  registerForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    role: new FormControl('user', Validators.required)
  });
  toggleLoginPassword() {
    this.showLoginPassword = !this.showLoginPassword;
  }

  toggleRegisterPassword() {
    this.showRegisterPassword = !this.showRegisterPassword;
  }
  loginError = '';
  registerError = '';
  registerSuccess = false;


  loginService = inject(LoginService);
  router = inject(Router);

  // Removed empty constructor

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
    const role = this.registerForm.value.role || 'user';
    this.loginService.register(username, password, role).subscribe({
      next: () => {
        this.registerError = '';
        this.registerSuccess = true;
        // Automatically log in after registration
        this.loginService.login(username, password).subscribe({
          next: (res) => {
            localStorage.setItem('currentUser', res.user.username);
            localStorage.setItem('currentUserRole', res.user.role || 'user');
            this.router.navigate(['/home']);
          },
          error: (err) => {
            this.loginError = err?.error?.message || 'Login failed after registration.';
          }
        });
      },
      error: (err) => {
        this.registerError = err?.error?.message || 'Registration failed.';
        this.registerSuccess = false;
      }
    });
  }
}
