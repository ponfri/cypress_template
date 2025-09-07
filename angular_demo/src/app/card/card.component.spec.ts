import { TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';

describe('CardComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent]
    }).compileComponents();
  });

  it('should create the card component', () => {
    const fixture = TestBed.createComponent(CardComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it('should render projected content', () => {
    const fixture = TestBed.createComponent(CardComponent);
    fixture.nativeElement.innerHTML = '<app-card>Projected Content</app-card>';
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Projected Content');
  });
});
