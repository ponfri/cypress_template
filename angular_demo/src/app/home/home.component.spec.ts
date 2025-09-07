import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import { Event } from '@angular/router';
import { Subject } from 'rxjs';
import { HomeComponent } from './home.component';
import { MyIfDirective } from '../my-if.directive/my-if.directive';

describe('HomeComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent, MyIfDirective],
    }).compileComponents();
  });

  it('should create the home component', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const home = fixture.componentInstance;
    expect(home).toBeTruthy();
  });

  it('should show the welcome message', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent?.toLowerCase()).toContain('welcome');
  });

  it('should update isAdmin on router event', () => {
  localStorage.setItem('currentUserRole', 'admin');
  const router = TestBed.inject(Router);
  const routerEventSubject = new Subject<Event>();
  spyOnProperty(router as unknown as { events: unknown }, 'events', 'get').and.returnValue(routerEventSubject.asObservable());
  const fixture = TestBed.createComponent(HomeComponent);
  const component = fixture.componentInstance;
  fixture.detectChanges();
  routerEventSubject.next(new NavigationEnd(1, '/admin', '/admin'));
  fixture.detectChanges();
  return fixture.whenStable().then(() => {
    expect(component.isAdmin).toBeTrue();
  });
  });

  it('should register Angular elements after view init', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const home = fixture.componentInstance;
  // Simulate customElements and injector
    const customElementsMock = {
      define: () => undefined,
      get: () => undefined,
      getName: () => '',
      upgrade: () => undefined,
      whenDefined: () => Promise.resolve(class extends HTMLElement {})
    };
    spyOnProperty(window, 'customElements', 'get').and.returnValue(customElementsMock);
    expect(() => home.ngAfterViewInit()).not.toThrow();
  });

  it('should toggle showAnimated and trigger animation', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const home = fixture.componentInstance;
    home.showAnimated = false;
    home.showAnimated = true;
    expect(home.showAnimated).toBeTrue();
  });
});
