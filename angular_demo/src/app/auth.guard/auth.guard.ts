import { Injectable } from '@angular/core';
import { CanActivateFn } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuardService {
  isLoggedIn = false;
}

export const authGuard: CanActivateFn = () => {
  // Allow navigation if any user is present in localStorage
  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    const currentUser = localStorage.getItem('currentUser');
    return !!currentUser;
  }
  return false;
};
