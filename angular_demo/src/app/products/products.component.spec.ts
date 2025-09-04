
import { TestBed } from '@angular/core/testing';
import { ProductsComponent } from './products.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

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
});
