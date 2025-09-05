import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestingPlaygroundComponent } from './testing-playground.component';
import { TestShadowEl } from './test-shadow-el';
import { CommonModule } from '@angular/common';

describe('TestingPlaygroundComponent', () => {
  beforeAll(() => {
    if (!customElements.get('test-shadow-el')) {
      customElements.define('test-shadow-el', TestShadowEl);
    }
  });
  let component: TestingPlaygroundComponent;
  let fixture: ComponentFixture<TestingPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, TestingPlaygroundComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(TestingPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open and close modal', () => {
    component.openModal();
    fixture.detectChanges();
    expect(component.showModal).toBeTrue();
    component.closeModal();
    fixture.detectChanges();
    expect(component.showModal).toBeFalse();
  });

  it('should toggle disabled state', () => {
    expect(component.isDisabled).toBeTrue();
    component.toggleDisabled();
    expect(component.isDisabled).toBeFalse();
  });

  it('should show toast notification', () => {
    component.showNotification();
    expect(component.showToast).toBeTrue();
  });

  it('should paginate items', () => {
    expect(component.currentPage).toBe(1);
    component.nextPage();
    expect(component.currentPage).toBe(2);
    component.prevPage();
    expect(component.currentPage).toBe(1);
  });

  it('should select dropdown option', () => {
    component.selectDropdown('Option 2');
    expect(component.selectedDropdown).toBe('Option 2');
  });

  it('should set date', () => {
    const input = document.createElement('input');
    input.value = '2025-09-04';
    const event = new Event('change');
    Object.defineProperty(event, 'target', { writable: false, value: input });
    component.setDate(event);
    expect(component.selectedDate).toBe('2025-09-04');
  });

  it('should handle drag and drop', () => {
    const dragEvent = new DragEvent('drop', { bubbles: true });
    component.onDrop(dragEvent);
    expect(component.dropped).toBeTrue();
  });
});
