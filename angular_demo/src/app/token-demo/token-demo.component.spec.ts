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
});
