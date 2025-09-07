// ...existing code...
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { UsersComponent } from '../users/users.component';
import { ProductsComponent } from '../products/products.component';
import { FormsDemoComponent } from '../forms-demo/forms-demo.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'forms', component: FormsDemoComponent },
];

export class AppRoutingModule {}
// MCP refactor: NgModule removed. Use standalone route configuration in app.routes.ts
export const AppRoutes = RouterModule.forRoot(routes);
