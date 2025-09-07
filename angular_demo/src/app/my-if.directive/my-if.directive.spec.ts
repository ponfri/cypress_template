import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
// ...existing code...
import { By } from '@angular/platform-browser';

import { MyIfDirective } from './my-if.directive';
@Component({
  standalone: true,
  imports: [MyIfDirective],
  template: `<div *appMyIf="true">Visible</div>`
})
class TestComponent {}

describe('MyIfDirective', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent]
    });
  });

  it('should render content when condition is true', () => {
    const fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    const div = fixture.debugElement.query(By.css('div'));
    expect(div).toBeTruthy();
    expect(div.nativeElement.textContent).toContain('Visible');
  });

  it('should not render content when condition is false', () => {
    @Component({
      standalone: true,
      imports: [MyIfDirective],
      template: `<div *appMyIf="false">Hidden</div>`
    })
    class FalseTestComponent {}
    TestBed.configureTestingModule({ imports: [FalseTestComponent] });
    const fixture = TestBed.createComponent(FalseTestComponent);
    fixture.detectChanges();
    const div = fixture.debugElement.query(By.css('div'));
    expect(div).toBeNull();
  });
});
