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

  it('should increment, decrement, and reset the counter', () => {
    const fixture = TestBed.createComponent(SignalServiceDemoComponent);
    const comp = fixture.componentInstance;
    const counter = comp['counter'];
    spyOn(counter, 'increment').and.callThrough();
    spyOn(counter, 'decrement').and.callThrough();
    spyOn(counter, 'reset').and.callThrough();
    comp.inc();
    expect(counter.increment).toHaveBeenCalled();
    comp.dec();
    expect(counter.decrement).toHaveBeenCalled();
    comp.reset();
    expect(counter.reset).toHaveBeenCalled();
  });

  it('should update count value', () => {
    const fixture = TestBed.createComponent(SignalServiceDemoComponent);
    const comp = fixture.componentInstance;
    const counter = comp['counter'];
    spyOn(counter, 'count').and.returnValue(42);
    expect(comp.count()).toBe(42);
  });
});
