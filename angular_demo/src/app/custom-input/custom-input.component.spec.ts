import { TestBed } from '@angular/core/testing';
import { CustomInputComponent } from './custom-input.component';
import { FormsModule } from '@angular/forms';

describe('CustomInputComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomInputComponent, FormsModule]
    }).compileComponents();
  });

  it('should create the custom input component', () => {
    const fixture = TestBed.createComponent(CustomInputComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it('should bind label input', () => {
    const fixture = TestBed.createComponent(CustomInputComponent);
    const comp = fixture.componentInstance;
    comp.label = 'Test Label:';
    expect(comp.label).toBe('Test Label:');
  });

  it('should write value to input', () => {
    const fixture = TestBed.createComponent(CustomInputComponent);
    const comp = fixture.componentInstance;
    comp.writeValue('abc');
    expect(comp.value).toBe('abc');
  });

  it('should register onChange and call it on input', () => {
    const fixture = TestBed.createComponent(CustomInputComponent);
    const comp = fixture.componentInstance;
    const mockChange = jasmine.createSpy('onChange');
    comp.registerOnChange(mockChange);
    const event = { target: { value: 'xyz' } } as unknown as Event;
    comp.onInput(event);
    expect(mockChange).toHaveBeenCalledWith('xyz');
  });

  it('should register onTouched and call it on blur', () => {
    const fixture = TestBed.createComponent(CustomInputComponent);
    const comp = fixture.componentInstance;
    const mockTouched = jasmine.createSpy('onTouched');
    comp.registerOnTouched(mockTouched);
    comp.onTouched();
    expect(mockTouched).toHaveBeenCalled();
  });
});
