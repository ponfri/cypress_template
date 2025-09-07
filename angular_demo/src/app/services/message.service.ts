import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MessageService {
  private messageSubject = new BehaviorSubject<string>('');
  get currentMessage() {
    return this.messageSubject.value;
  }
  message$ = this.messageSubject.asObservable();

  showMessage(msg: string, durationMs = 5000) {
    this.messageSubject.next(msg);
    setTimeout(() => {
      this.clearMessage();
    }, durationMs);
  }

  clearMessage() {
    this.messageSubject.next('');
  }
}
