import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { FormsDemoComponent } from './forms-demo/forms-demo.component';
import { AdminComponent } from './admin/admin.component';
import { ContactsComponent } from './contacts/contacts.component';
import { authGuard } from './auth.guard/auth.guard';
import { userResolver } from './user.resolver/user.resolver';
import { ResolverDemoComponent } from './resolver-demo/resolver-demo.component';
import { ResolverDemoResolver } from './resolver-demo/resolver-demo.resolver';
// import { canDeactivateGuard } from './can-deactivate/can-deactivate.guard';

import { Angular20DemoComponent } from './angular20-demo/angular20-demo.component';

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
	{ path: 'home', component: HomeComponent }, // Home page after login
	{ path: 'resolver-demo', component: ResolverDemoComponent, resolve: { demo: ResolverDemoResolver } },
	{
		path: 'feature-demo',
		loadComponent: () => import('./feature-demo/feature-demo.component').then(m => m.FeatureDemoComponent)
	},
	{ path: 'angular20-demo', component: Angular20DemoComponent }
];
