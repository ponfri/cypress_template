import { Component, ErrorHandler, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-error-demo',
  standalone: true,
  imports: [CommonModule],
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
