import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header.component';
import { MenuComponent } from './menu.component';
import { FooterComponent } from './footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MenuComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-demo';
  get isLoggedIn(): boolean {
    try {
      return typeof window !== 'undefined' && typeof localStorage !== 'undefined' && !!localStorage.getItem('currentUser');
    } catch {
      return false;
    }
  }

  get isLoginPage(): boolean {
    if (typeof window !== 'undefined') {
      return window.location.pathname === '/' || window.location.pathname === '/login';
    }
    return false;
  }

  get isAdmin(): boolean {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      return localStorage.getItem('currentUserRole') === 'admin';
    }
    return false;
  }
}
