import { Component, signal, input, output, OnInit, inject, computed, effect } from '@angular/core';
import { DOCUMENT, CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { StandaloneDemoComponent } from '../standalone-demo/standalone-demo.component';
import { ResolverDemoComponent } from '../resolver-demo/resolver-demo.component';
import { TokenDemoComponent } from '../token-demo/token-demo.component';
import { AfterRenderDemoComponent } from '../after-render-demo/after-render-demo.component';

// --- InjectDemoComponent ---
@Component({
  selector: 'app-inject-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <h4>inject() Demo</h4>
      <p>Injected document title: {{ injectedValue }}</p>
    </div>
  `
})
export class InjectDemoComponent implements OnInit {
  injectedValue = '';
  private document = inject(DOCUMENT);
  ngOnInit() {
    this.injectedValue = this.document.title;
  }
}

// --- AsyncPipeDemoComponent ---
@Component({
  selector: 'app-async-pipe-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <h4>Async Pipe Demo</h4>
      <ng-container *ngIf="data$ | async as data; else loading">
        <div>Async data loaded: {{ data }}</div>
      </ng-container>
      <ng-template #loading>
        <div>Loading async data...</div>
      </ng-template>
    </div>
  `
})
export class AsyncPipeDemoComponent {
  data$: Observable<string> = of('Async Data!').pipe(delay(1500));
}

// --- SignalChildComponent ---
@Component({
  selector: 'app-signal-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: '../signal-child/signal-child.component.html'
})
export class SignalChildComponent {
  count = input(0);
  countChanged = output<number>();
  notifyParent() { this.countChanged.emit(this.count()); }
}

// --- ModelDemoComponent ---
@Component({
  selector: 'app-model-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <h4>Signal Two-way Binding Demo</h4>
      <input type="text" [value]="name()" #nameInput (input)="name.set(nameInput.value)" />
      <p>Value: {{ name() }}</p>
    </div>
  `
})
export class ModelDemoComponent {
  name = signal('');
}

// --- SignalFormComponent ---
@Component({
  selector: 'app-signal-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: '../signal-form/signal-form.component.html'
})
export class SignalFormComponent {
  form = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('')
  });
}

// --- ControlFlowDemoComponent ---
@Component({
  selector: 'app-control-flow-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: '../control-flow-demo/control-flow-demo.component.html'
})
export class ControlFlowDemoComponent {
  show = true;
  items = [1, 2, 3];
}

// --- ViewTransitionDemoComponent ---
@Component({
  selector: 'app-view-transition-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: '../view-transition-demo/view-transition-demo.component.html',
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition(':enter', [animate('300ms')]),
      transition(':leave', [animate('300ms')])
    ])
  ]
})
export class ViewTransitionDemoComponent {
  state = true;
  toggle() { this.state = !this.state; }
}

// --- ZonelessDemoComponent ---
@Component({
  selector: 'app-zoneless-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: '../zoneless-demo/zoneless-demo.component.html'
})
export class ZonelessDemoComponent {}


// --- Main Angular20DemoComponent ---
@Component({
  selector: 'app-angular20-demo',
  standalone: true,
  imports: [
    SignalChildComponent,
    SignalFormComponent,
    ControlFlowDemoComponent,
    ViewTransitionDemoComponent,
    ZonelessDemoComponent,
    AfterRenderDemoComponent,
    AsyncPipeDemoComponent,
    ModelDemoComponent,
    InjectDemoComponent,
  StandaloneDemoComponent,
  ResolverDemoComponent,
  TokenDemoComponent
  ],
  templateUrl: './angular20-demo.component.html'
})
export class Angular20DemoComponent {
  parentCount = signal(0);
  childNotified = signal(false);

  // Computed signal example
  doubleCount = computed(() => this.parentCount() * 2);

  // Signal effect example
  countEffect = effect(() => {
    if (this.parentCount() > 0) {
      console.log('Parent count changed:', this.parentCount());
    }
  });

  onCountChanged() { this.childNotified.set(true); }
}