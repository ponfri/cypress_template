import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SignalServiceDemoComponent } from './signal-service-demo.component';

describe('SignalServiceDemoComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalServiceDemoComponent, RouterTestingModule]
    }).compileComponents();
  });

  it('should create the signal service demo component', () => {
    const fixture = TestBed.createComponent(SignalServiceDemoComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });
});
