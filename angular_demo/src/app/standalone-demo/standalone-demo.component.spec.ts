import { TestBed } from '@angular/core/testing';
import { StandaloneDemoComponent } from './standalone-demo.component';
import { HighlightDirective } from '../highlight.directive/highlight.directive';

describe('StandaloneDemoComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
  imports: [StandaloneDemoComponent, HighlightDirective]
    }).compileComponents();
  });

  it('should create the standalone demo component', () => {
    const fixture = TestBed.createComponent(StandaloneDemoComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it('should render uppercase pipe output', () => {
    const fixture = TestBed.createComponent(StandaloneDemoComponent);
    fixture.detectChanges();
    const text = fixture.nativeElement.textContent;
    expect(text).toContain('ANGULAR STANDALONE PIPE');
  });

  it('should apply highlight directive on hover', () => {
    const fixture = TestBed.createComponent(StandaloneDemoComponent);
    fixture.detectChanges();
    const paragraphs = fixture.nativeElement.querySelectorAll('p');
  // Third paragraph uses custom color
  paragraphs[2].dispatchEvent(new Event('mouseenter'));
  fixture.detectChanges();
  expect(['lightgreen', 'rgb(144, 238, 144)']).toContain(paragraphs[2].style.backgroundColor); // lightgreen
  // Fourth paragraph uses default color
  paragraphs[3].dispatchEvent(new Event('mouseenter'));
  fixture.detectChanges();
  expect(paragraphs[3].style.backgroundColor).toBe('rgb(255, 238, 186)'); // #ffeeba
  });
});
