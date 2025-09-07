import { TestBed } from '@angular/core/testing';
import { DynamicDemoComponent } from './dynamic-demo.component';

describe('DynamicDemoComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicDemoComponent]
    }).compileComponents();
  });

  it('should create the dynamic demo component', () => {
    const fixture = TestBed.createComponent(DynamicDemoComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });
  // No additional logic to test
});
