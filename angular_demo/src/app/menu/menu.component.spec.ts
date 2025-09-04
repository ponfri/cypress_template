
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
});
