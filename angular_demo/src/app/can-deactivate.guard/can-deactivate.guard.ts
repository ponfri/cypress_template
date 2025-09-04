import { Injectable } from '@angular/core';
import { CanDeactivateFn } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class CanDeactivateService {}

export const canDeactivateGuard: CanDeactivateFn<object> = () => {
  // Simulate can deactivate check
  return confirm('Do you really want to leave this page?');
};
