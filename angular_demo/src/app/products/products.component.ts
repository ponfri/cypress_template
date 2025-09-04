import { Component, OnInit, inject } from '@angular/core';

import { DataService, Product } from '../services/data.service';
import { HeaderComponent } from '../header/header.component';
import { MenuComponent } from '../menu/menu.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, MenuComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
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
