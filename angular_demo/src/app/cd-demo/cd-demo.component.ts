import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';

@Component({
  selector: 'app-cd-demo',
  standalone: true,
  template: `
    <div style="border:1px dashed #1976d2;padding:1rem;margin:1rem 0;">
      <h4>Change Detection Demo</h4>
  <p>Current value: {{ value() }}</p>
      <button (click)="updateValue()">Update Value</button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CdDemoComponent {
  value = input(0);

  valueChanged = output<number>();

  updateValue() {
    this.valueChanged.emit(this.value() + 1);
  }
}
