import { TestBed } from '@angular/core/testing';
import { HttpDemoComponent } from './http-demo.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HttpDemoComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpDemoComponent, HttpClientTestingModule]
    }).compileComponents();
  });

  it('should create the http demo component', () => {
    const fixture = TestBed.createComponent(HttpDemoComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });
});
