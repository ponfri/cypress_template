import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StoreService {
  private _counter = signal(0);
  get counter() { return this._counter(); }
  increment() { this._counter.update(c => c + 1); }
  decrement() { this._counter.update(c => c - 1); }
}
