import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-after-render-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './after-render-demo.component.html'
})
export class AfterRenderDemoComponent implements AfterViewInit {
  ngAfterViewInit() { console.log('ngAfterViewInit hook called!'); }
}
