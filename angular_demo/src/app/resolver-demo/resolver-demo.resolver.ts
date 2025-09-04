import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ResolverDemoResolver implements Resolve<string> {
  resolve(): Observable<string> {
    return of('Resolved data from ResolverDemoResolver!');
  }
}
