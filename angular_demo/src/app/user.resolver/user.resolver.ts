import { Injectable } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserResolverService {}

export const userResolver: ResolveFn<Observable<string>> = () => {
  // Simulate resolving user data
  return of('Resolved User Data');
};
