import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FeatureDemoComponent } from './feature-demo.component';

describe('FeatureDemoComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureDemoComponent, RouterTestingModule]
    }).compileComponents();
  });

  it('should create the feature demo component', () => {
    const fixture = TestBed.createComponent(FeatureDemoComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });
});
