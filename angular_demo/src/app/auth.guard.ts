import { Injectable } from '@angular/core';
import { CanActivateFn } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuardService {
  isLoggedIn = false;
}

export const authGuard: CanActivateFn = () => {
  // Simulate authentication check
  return Math.random() > 0.5;
};
