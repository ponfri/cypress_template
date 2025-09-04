import { TestBed } from '@angular/core/testing';
import { ResolverDemoComponent } from './resolver-demo.component';
import { ActivatedRoute } from '@angular/router';

describe('ResolverDemoComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResolverDemoComponent],
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: { data: { demo: 'test' } } } }
      ]
    }).compileComponents();
  });

  it('should create the resolver demo component', () => {
    const fixture = TestBed.createComponent(ResolverDemoComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
    expect(comp.resolvedData).toBe('test');
  });
});
