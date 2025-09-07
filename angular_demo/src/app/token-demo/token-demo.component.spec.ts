import { TestBed } from '@angular/core/testing';
import { TokenDemoComponent } from './token-demo.component';

describe('TokenDemoComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TokenDemoComponent]
    }).compileComponents();
  });

  it('should create the token demo component', () => {
    const fixture = TestBed.createComponent(TokenDemoComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it('should inject the correct token value', () => {
    const fixture = TestBed.createComponent(TokenDemoComponent);
    const comp = fixture.componentInstance;
    expect(comp.value).toBe('Injected value from DEMO_TOKEN!');
  });
});
