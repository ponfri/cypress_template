import { Component, Input, inject } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-error-page',
  standalone: true,
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent {
  @Input() errorMessage = '';
  @Input() errorDetails = '';

  location = inject(Location);

  goBack() {
    this.location.back();
  }
}
