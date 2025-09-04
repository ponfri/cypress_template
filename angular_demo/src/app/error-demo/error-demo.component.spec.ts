import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ErrorDemoComponent } from './error-demo.component';

describe('ErrorDemoComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorDemoComponent, RouterTestingModule]
    }).compileComponents();
  });

  it('should create the error demo component', () => {
    const fixture = TestBed.createComponent(ErrorDemoComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });
});
