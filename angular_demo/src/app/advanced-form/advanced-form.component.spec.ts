import { TestBed } from '@angular/core/testing';
import { AdvancedFormComponent } from './advanced-form.component';

describe('AdvancedFormComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvancedFormComponent]
    }).compileComponents();
  });

  it('should create the advanced form component', () => {
    const fixture = TestBed.createComponent(AdvancedFormComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it('should have invalid form initially', () => {
    const fixture = TestBed.createComponent(AdvancedFormComponent);
    const comp = fixture.componentInstance;
    expect(comp.form.invalid).toBeTrue();
    expect(comp.submitted).toBeFalse();
  });

  it('should show validation errors for empty fields', () => {
    const fixture = TestBed.createComponent(AdvancedFormComponent);
    const comp = fixture.componentInstance;
    comp.form.controls.name.markAsTouched();
    comp.form.controls.email.markAsTouched();
    comp.form.controls.age.markAsTouched();
    expect(comp.form.controls.name.invalid).toBeTrue();
    expect(comp.form.controls.email.invalid).toBeTrue();
    expect(comp.form.controls.age.invalid).toBeTrue();
  });

  it('should validate email and age', () => {
    const fixture = TestBed.createComponent(AdvancedFormComponent);
    const comp = fixture.componentInstance;
    comp.form.controls.name.setValue('Test');
    comp.form.controls.email.setValue('invalid');
  comp.form.controls.age.setValue('10');
    comp.form.controls.email.markAsTouched();
    comp.form.controls.age.markAsTouched();
    expect(comp.form.controls.email.invalid).toBeTrue();
    expect(comp.form.controls.age.invalid).toBeTrue();
  });

  it('should submit valid form and show output', () => {
    const fixture = TestBed.createComponent(AdvancedFormComponent);
    const comp = fixture.componentInstance;
    comp.form.controls.name.setValue('Test');
    comp.form.controls.email.setValue('test@example.com');
  comp.form.controls.age.setValue('25');
    expect(comp.form.valid).toBeTrue();
    comp.onSubmit();
    expect(comp.submitted).toBeTrue();
  expect(comp.form.value).toEqual({ name: 'Test', email: 'test@example.com', age: '25' });
  });
});
