
import { TestBed } from '@angular/core/testing';
import { MenuComponent } from './menu.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('MenuComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuComponent, RouterTestingModule]
    }).compileComponents();
  });

  it('should create the menu component', () => {
    const fixture = TestBed.createComponent(MenuComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it('should check admin status', () => {
    const fixture = TestBed.createComponent(MenuComponent);
    const comp = fixture.componentInstance;
    localStorage.setItem('currentUserRole', 'admin');
    expect(comp.isAdmin).toBeTrue();
    localStorage.setItem('currentUserRole', 'user');
    expect(comp.isAdmin).toBeFalse();
  });

  it('should logout and clear localStorage, then navigate', () => {
    const fixture = TestBed.createComponent(MenuComponent);
    const comp = fixture.componentInstance;
    localStorage.setItem('currentUser', 'test');
    localStorage.setItem('currentUserRole', 'admin');
    spyOn(comp.router, 'navigate');
    comp.logout();
    expect(localStorage.getItem('currentUser')).toBeNull();
    expect(localStorage.getItem('currentUserRole')).toBeNull();
    expect(comp.router.navigate).toHaveBeenCalledWith(['/login']);
  });
});
