import { TestBed } from '@angular/core/testing';
import { ContentProjectionDemoComponent } from './content-projection-demo.component';

describe('ContentProjectionDemoComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentProjectionDemoComponent]
    }).compileComponents();
  });

  it('should create the content projection demo component', () => {
    const fixture = TestBed.createComponent(ContentProjectionDemoComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });
});
