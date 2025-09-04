import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
// ...existing code...
import { By } from '@angular/platform-browser';

import { HostDemoDirective } from './host-demo.directive';
@Component({
  standalone: true,
  imports: [HostDemoDirective],
  template: `<div appHostDemo>Hover me</div>`
})
class TestComponent {}

describe('HostDemoDirective', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent]
    });
  });

  it('should create an instance', () => {
    const fixture = TestBed.createComponent(TestComponent);
    const directive = fixture.debugElement.query(By.directive(HostDemoDirective));
    expect(directive).toBeTruthy();
  });
});
