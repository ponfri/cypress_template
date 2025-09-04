import { Component, OnInit, inject } from '@angular/core';

import { DataService, Product } from '../data.service';
import { HeaderComponent } from '../header.component';
import { MenuComponent } from '../menu.component';
import { FooterComponent } from '../footer.component';

@Component({
    selector: 'app-products',
    imports: [HeaderComponent, FooterComponent, MenuComponent],
    templateUrl: './products.component.html',
    styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  private dataService = inject(DataService);
  isAdmin = typeof window !== 'undefined' && localStorage.getItem('role') === 'admin';

  ngOnInit(): void {
    this.dataService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
    });
  }
}
