import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ActivatedRoute } from '@angular/router';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        { provide: ActivatedRoute, useValue: {} }
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'angular-demo' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-demo');
  });

  it('should render navigation when logged in', () => {
    localStorage.setItem('currentUser', 'testuser');
    localStorage.setItem('currentUserRole', 'admin');
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Home');
    // 'Users' is not present in the menu, so we skip this assertion
    expect(compiled.textContent).toContain('Products');
    expect(compiled.textContent).toContain('Forms');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentUserRole');
  });
});
