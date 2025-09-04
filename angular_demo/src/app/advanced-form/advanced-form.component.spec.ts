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
});
