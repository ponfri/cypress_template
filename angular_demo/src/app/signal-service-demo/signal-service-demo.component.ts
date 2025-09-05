import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalCounterService } from '../signal-counter/signal-counter.service';
import { HeaderComponent } from '../header/header.component';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-signal-service-demo',
  standalone: true,
  imports: [CommonModule, HeaderComponent, MenuComponent],
  templateUrl: './signal-service-demo.component.html'
})
export class SignalServiceDemoComponent {
  private counter = inject(SignalCounterService);
  count = computed(() => this.counter.count());
  inc() { this.counter.increment(); }
  dec() { this.counter.decrement(); }
  reset() { this.counter.reset(); }
}
