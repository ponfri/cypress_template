import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HostBindingDemoComponent } from './host-binding-demo.component';

describe('HostBindingDemoComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostBindingDemoComponent, RouterTestingModule]
    }).compileComponents();
  });

  it('should create the host binding demo component', () => {
    const fixture = TestBed.createComponent(HostBindingDemoComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });
  // No additional logic to test
});
