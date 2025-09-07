import { TestBed } from '@angular/core/testing';
import { HttpDemoComponent } from './http-demo.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

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

  it('should fetch data and set observable', () => {
    const fixture = TestBed.createComponent(HttpDemoComponent);
    const comp = fixture.componentInstance;
    const mockData = { id: 1, title: 'Test' };
  spyOn(comp['http'], 'get').and.returnValue(of(mockData));
    comp.fetchData();
    expect(comp.data$).toBeDefined();
  });
});
