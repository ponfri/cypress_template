import { TestBed } from '@angular/core/testing';
import { AdminComponent } from './admin.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AdminComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
  imports: [AdminComponent, HttpClientTestingModule]
    }).compileComponents();
  });

  it('should create the admin component', () => {
    const fixture = TestBed.createComponent(AdminComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });
});
