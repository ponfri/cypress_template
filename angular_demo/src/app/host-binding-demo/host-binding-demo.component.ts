import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostDemoDirective } from '../host-demo/host-demo.directive';
import { HeaderComponent } from '../header/header.component';
import { MenuComponent } from '../menu/menu.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-host-binding-demo',
  standalone: true,
  imports: [CommonModule, HostDemoDirective, HeaderComponent, MenuComponent],
  templateUrl: './host-binding-demo.component.html',
  styles: [`.active { border: 2px solid #ff9800 !important; }`]
})
export class HostBindingDemoComponent {}
