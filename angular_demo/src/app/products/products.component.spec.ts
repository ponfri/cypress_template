
import { TestBed } from '@angular/core/testing';
import { ProductsComponent } from './products.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

describe('ProductsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
  imports: [ProductsComponent, HttpClientTestingModule, RouterTestingModule]
    }).compileComponents();
  });

  it('should create the products component', () => {
    const fixture = TestBed.createComponent(ProductsComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it('should load products on init', () => {
    const fixture = TestBed.createComponent(ProductsComponent);
    const comp = fixture.componentInstance;
  const mockProducts = [{ id: 1, name: 'A', price: 1 }];
  spyOn(comp['dataService'], 'getProducts').and.returnValue(of(mockProducts));
  comp.ngOnInit();
  expect(comp.products).toEqual(mockProducts);
  });

  it('should check admin status', () => {
  localStorage.setItem('currentUserRole', 'admin');
  localStorage.setItem('role', 'admin');
  const fixture = TestBed.createComponent(ProductsComponent);
  const component = fixture.componentInstance;
  fixture.detectChanges();
  expect(component.isAdmin).toBeTrue();
  });
});
