import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    // Log error to console and show alert for demo
    console.error('Global Error Handler:', error);
    if (typeof window !== 'undefined' && typeof alert !== 'undefined') {
      alert('A global error occurred! Check the console for details.');
    } else {
      // Server-side: fallback to logging only
      console.error('A global error occurred! Check the console for details.');
    }
  }
}
