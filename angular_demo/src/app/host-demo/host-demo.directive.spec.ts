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

  it('should set background and class on mouseenter, reset on mouseleave', () => {
    const fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    const div = fixture.nativeElement.querySelector('div');
    // Simulate mouseenter
    div.dispatchEvent(new Event('mouseenter'));
    fixture.detectChanges();
    expect(div.style.backgroundColor).toBe('rgb(255, 224, 130)'); // #ffe082
    expect(div.classList.contains('active')).toBeTrue();
    // Simulate mouseleave
    div.dispatchEvent(new Event('mouseleave'));
    fixture.detectChanges();
    expect(div.style.backgroundColor).toBe('');
    expect(div.classList.contains('active')).toBeFalse();
  });
});
