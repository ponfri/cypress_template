import { Component, ErrorHandler, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { MenuComponent } from '../menu/menu.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-error-demo',
  standalone: true,
  imports: [CommonModule, HeaderComponent, MenuComponent, FooterComponent],
  templateUrl: './error-demo.component.html'
})
export class ErrorDemoComponent {
  private errorHandler = inject(ErrorHandler);
  throwError() {
    try {
      throw new Error('This is a demo error!');
    } catch (e) {
      this.errorHandler.handleError(e);
    }
  }
}
