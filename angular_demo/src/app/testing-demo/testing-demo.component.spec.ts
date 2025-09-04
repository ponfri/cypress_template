import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestingDemoComponent } from './testing-demo.component';

describe('TestingDemoComponent', () => {
  let component: TestingDemoComponent;
  let fixture: ComponentFixture<TestingDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestingDemoComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(TestingDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
