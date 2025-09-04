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
});
