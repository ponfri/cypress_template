import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UppercasePipe } from '../uppercase.pipe/uppercase.pipe';
import { HighlightDirective } from '../highlight.directive/highlight.directive';

@Component({
  selector: 'app-standalone-demo',
  standalone: true,
  imports: [CommonModule, UppercasePipe, HighlightDirective],
  template: `
    <section>
      <h3>Standalone Pipe Demo</h3>
      <p>Original: Angular Standalone Pipe</p>
      <p>Uppercase: {{ 'Angular Standalone Pipe' | uppercase }}</p>
    </section>
    <section>
      <h3>Standalone Directive Demo</h3>
      <p [appHighlight]="'lightgreen'">Hover to highlight me (custom color)</p>
      <p appHighlight>Hover to highlight me (default color)</p>
    </section>
  `
})
export class StandaloneDemoComponent {}
