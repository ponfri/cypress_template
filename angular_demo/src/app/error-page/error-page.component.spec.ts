import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErrorPageComponent } from './error-page.component';
import { Location } from '@angular/common';

describe('ErrorPageComponent', () => {
  let component: ErrorPageComponent;
  let fixture: ComponentFixture<ErrorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorPageComponent],
      providers: [Location]
    }).compileComponents();
    fixture = TestBed.createComponent(ErrorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should bind errorMessage and errorDetails inputs', () => {
    component.errorMessage = 'Test error';
    component.errorDetails = 'Details';
    expect(component.errorMessage).toBe('Test error');
    expect(component.errorDetails).toBe('Details');
  });

  it('should call Location.back() on goBack()', () => {
    spyOn(component.location, 'back');
    component.goBack();
    expect(component.location.back).toHaveBeenCalled();
  });
});
