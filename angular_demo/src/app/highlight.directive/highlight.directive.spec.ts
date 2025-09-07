import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
// ...existing code...
import { By } from '@angular/platform-browser';

import { HighlightDirective } from './highlight.directive';
@Component({
  selector: 'app-test-cmp',
  imports: [HighlightDirective],
  template: `<span appHighlight>Test</span>`
})
class TestComponent {}

describe('HighlightDirective', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent]
    });
  });

  it('should create an instance', () => {
    const fixture = TestBed.createComponent(TestComponent);
    const directive = fixture.debugElement.query(By.directive(HighlightDirective));
    expect(directive).toBeTruthy();
  });

  it('should highlight on mouseenter and reset on mouseleave', () => {
    const fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    const span = fixture.nativeElement.querySelector('span');
    // Simulate mouseenter
    span.dispatchEvent(new Event('mouseenter'));
    fixture.detectChanges();
    expect(span.style.backgroundColor).toBe('rgb(255, 238, 186)'); // #ffeeba
    // Simulate mouseleave
    span.dispatchEvent(new Event('mouseleave'));
    fixture.detectChanges();
    expect(span.style.backgroundColor).toBe('');
  });

  it('should use input color for highlight', () => {
    @Component({
  selector: 'app-color-test-cmp',
      imports: [HighlightDirective],
      template: `<span [appHighlight]="'#00ff00'">Test</span>`
    })
    class ColorTestComponent {}
    TestBed.configureTestingModule({ imports: [ColorTestComponent] });
    const fixture = TestBed.createComponent(ColorTestComponent);
    fixture.detectChanges();
    const span = fixture.nativeElement.querySelector('span');
    span.dispatchEvent(new Event('mouseenter'));
    fixture.detectChanges();
    expect(span.style.backgroundColor).toBe('rgb(0, 255, 0)');
  });
});
