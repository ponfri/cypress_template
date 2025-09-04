import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
// ...existing code...
import { By } from '@angular/platform-browser';

import { HighlightDirective } from './highlight.directive';
@Component({
  standalone: true,
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
});
