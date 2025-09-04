import { Component, OnInit, inject } from '@angular/core';
import { DataService, Product } from '../services/data.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
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
