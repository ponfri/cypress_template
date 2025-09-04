import { TestBed } from '@angular/core/testing';
import { CustomFormDemoComponent } from './custom-form-demo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('CustomFormDemoComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomFormDemoComponent, ReactiveFormsModule, RouterTestingModule]
    }).compileComponents();
  });

  it('should create the custom form demo component', () => {
    const fixture = TestBed.createComponent(CustomFormDemoComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });
});
