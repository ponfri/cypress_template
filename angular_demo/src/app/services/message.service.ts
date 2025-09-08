import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MessageService {
  private static getInitialMessage(): string {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const stored = localStorage.getItem('globalMessage');
      const expires = localStorage.getItem('globalMessageExpires');
      if (stored && expires && Date.now() < parseInt(expires, 10)) {
        return stored;
      }
      localStorage.removeItem('globalMessage');
      localStorage.removeItem('globalMessageExpires');
    }
    return '';
  }
  private messageSubject = new BehaviorSubject<string>(MessageService.getInitialMessage());
  private visibleSubject = new BehaviorSubject<boolean>(!!MessageService.getInitialMessage());
  constructor() {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const expires = localStorage.getItem('globalMessageExpires');
      const msg = localStorage.getItem('globalMessage');
      if (msg && expires) {
        const remaining = parseInt(expires, 10) - Date.now();
        if (remaining > 0) {
          setTimeout(() => {
            this.clearMessage();
          }, remaining);
        } else {
          this.clearMessage();
        }
      }
    }
  }
  get currentMessage() {
    return this.messageSubject.value;
  }
  message$ = this.messageSubject.asObservable();
  visible$ = this.visibleSubject.asObservable();

  private messageTimer: any;

  showMessage(msg: string, durationMs = 5000) {
    console.log('[MessageService] showMessage:', msg, 'duration:', durationMs);
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.setItem('globalMessage', msg);
      localStorage.setItem('globalMessageExpires', String(Date.now() + durationMs));
    }
    this.messageSubject.next(msg);
    this.visibleSubject.next(true);
    if (this.messageTimer) {
      clearTimeout(this.messageTimer);
    }
    this.messageTimer = setTimeout(() => {
      console.log('[MessageService] clearMessage (timer)');
      this.clearMessage();
      this.messageTimer = null;
    }, durationMs);
  }

  clearMessage() {
    console.log('[MessageService] clearMessage (manual)');
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.removeItem('globalMessage');
      localStorage.removeItem('globalMessageExpires');
    }
    this.messageSubject.next('');
    this.visibleSubject.next(false);
  }
}
