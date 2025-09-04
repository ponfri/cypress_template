import { Injectable, signal, computed } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SignalCounterService {
  private _count = signal(0);
  count = computed(() => this._count());

  increment() { this._count.set(this._count() + 1); }
  decrement() { this._count.set(this._count() - 1); }
  reset() { this._count.set(0); }
}
