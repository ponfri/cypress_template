import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimationsDemoComponent } from './animations-demo.component';

describe('AnimationsDemoComponent', () => {
  let component: AnimationsDemoComponent;
  let fixture: ComponentFixture<AnimationsDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimationsDemoComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(AnimationsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // No additional logic to test
});
