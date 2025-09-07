import { TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent]
    }).compileComponents();
  });

  it('should create the header component', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it('should have correct subtitle signal value', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const comp = fixture.componentInstance;
    expect(comp.subtitle()).toBe('Welcome to Angular 20 Best Practices!');
  });
});
