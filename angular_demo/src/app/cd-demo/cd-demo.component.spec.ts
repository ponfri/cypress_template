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

  it('should display initial value', () => {
    const fixture = TestBed.createComponent(CdDemoComponent);
    const comp = fixture.componentInstance;
    expect(comp.value()).toBe(0);
  });

  it('should emit incremented value on updateValue', () => {
  const fixture = TestBed.createComponent(CdDemoComponent);
  const comp = fixture.componentInstance;
  spyOn(comp.valueChanged, 'emit');
  comp.updateValue();
  expect(comp.valueChanged.emit).toHaveBeenCalledWith(1);
  });
});
