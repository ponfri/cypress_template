import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-advanced-form',
  // ...existing code...
  imports: [CommonModule, ReactiveFormsModule, JsonPipe],
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()" style="margin:1rem 0;">
      <label>
        Name:
        <input formControlName="name" />
      </label>
      @if (form.controls.name.invalid && form.controls.name.touched) {
        <div style="color:red;">Name is required.</div>
      }
      <br />
      <label>
        Email:
        <input formControlName="email" />
      </label>
      @if (form.controls.email.invalid && form.controls.email.touched) {
        <div style="color:red;">Valid email required.</div>
      }
      <br />
      <label>
        Age:
        <input type="number" formControlName="age" />
      </label>
      @if (form.controls.age.invalid && form.controls.age.touched) {
        <div style="color:red;">Age must be 18 or older.</div>
      }
      <br />
      <button type="submit" [disabled]="form.invalid">Submit</button>
    </form>
    @if (submitted) {
      <div>
        <strong>Form Submitted!</strong>
        <pre>{{ form.value | json }}</pre>
      </div>
    }
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
