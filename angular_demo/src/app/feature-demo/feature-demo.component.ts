import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { MenuComponent } from '../menu/menu.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-feature-demo',
  standalone: true,
  imports: [CommonModule, HeaderComponent, MenuComponent, FooterComponent],
  templateUrl: './feature-demo.component.html'
})
export class FeatureDemoComponent {}
