import { TestBed } from '@angular/core/testing';
import { CdDemoComponent } from './cd-demo.component';

describe('CdDemoComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CdDemoComponent]
    }).compileComponents();
  });

  it('should create the cd demo component', () => {
    const fixture = TestBed.createComponent(CdDemoComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });
});
