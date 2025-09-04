import { Component } from '@angular/core';
import { FooterComponent } from './footer.component';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
    selector: 'app-advanced-form',
    imports: [CommonModule, ReactiveFormsModule, JsonPipe],
    template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()" style="margin:1rem 0;">
      <label>
        Name:
        <input formControlName="name" />
      </label>
      <div *ngIf="form.controls.name.invalid && form.controls.name.touched" style="color:red;">Name is required.</div>
      <br />
      <label>
        Email:
        <input formControlName="email" />
      </label>
      <div *ngIf="form.controls.email.invalid && form.controls.email.touched" style="color:red;">Valid email required.</div>
      <br />
      <label>
        Age:
        <input type="number" formControlName="age" />
      </label>
      <div *ngIf="form.controls.age.invalid && form.controls.age.touched" style="color:red;">Age must be 18 or older.</div>
      <br />
      <button type="submit" [disabled]="form.invalid">Submit</button>
    </form>
    <div *ngIf="submitted">
      <strong>Form Submitted!</strong>
      <pre>{{ form.value | json }}</pre>
    </div>
  `
})
export class AdvancedFormComponent {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl('', [Validators.required, Validators.min(18)])
  });
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
}
