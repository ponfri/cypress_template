import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-http-demo',
  // ...existing code...
  imports: [CommonModule, HttpClientModule],
  template: `
    <section>
      <h3>HTTP Client Demo</h3>
      <button (click)="fetchData()">Fetch Data</button>
      <pre *ngIf="data$ | async as data">{{ data | json }}</pre>
    </section>
  `
})
export class HttpDemoComponent {
  data$?: Observable<Record<string, unknown>>;
  private http = inject(HttpClient);
  fetchData() {
    this.data$ = this.http.get<Record<string, unknown>>('https://jsonplaceholder.typicode.com/todos/1');
  }
}
