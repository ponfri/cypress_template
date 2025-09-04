import { TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent]
    }).compileComponents();
  });

  it('should create the footer component', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });
});
