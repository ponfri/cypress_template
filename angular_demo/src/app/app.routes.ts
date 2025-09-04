
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { FormsDemoComponent } from './forms-demo/forms-demo.component';
import { AdminComponent } from './admin.component';
import { ContactsComponent } from './contacts.component';
import { authGuard } from './auth.guard';
import { userResolver } from './user.resolver';
import { canDeactivateGuard } from './can-deactivate.guard';

export const routes: Routes = [
	{ path: 'contacts', component: ContactsComponent },
	{ path: '', component: LoginComponent },
	{ path: 'login', component: LoginComponent },
		{ path: 'users', component: UsersComponent, resolve: { userData: userResolver } },
	{ path: 'products', component: ProductsComponent },
	{ path: 'forms', component: FormsDemoComponent },
	{
		path: 'admin',
		canActivate: [authGuard],
		component: AdminComponent
	},
		{ path: 'home', component: HomeComponent } // Home page after login
];
