import { TestBed } from '@angular/core/testing';
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
    // The welcome message is rendered via the translate pipe as 'welcome'
    // For the test, just check for the word 'welcome' (case-insensitive)
    expect(compiled.textContent?.toLowerCase()).toContain('welcome');
  });
});
