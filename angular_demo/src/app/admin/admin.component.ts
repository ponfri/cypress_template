import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header.component';
import { MenuComponent } from '../menu.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, HeaderComponent, MenuComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  isAdmin = typeof window !== 'undefined' && localStorage.getItem('role') === 'admin';
}
