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
	{ path: 'angular20-demo', component: Angular20DemoComponent },
	{ path: 'tutorials', loadComponent: () => import('./tutorials/tutorials.component').then(m => m.TutorialsComponent) },
	{ path: 'playground', loadComponent: () => import('./playground/playground.component').then(m => m.PlaygroundComponent) },
	{ path: 'testing-playground', loadComponent: () => import('./testing-playground/testing-playground.component').then(m => m.TestingPlaygroundComponent) },
	{ path: 'error-demo', loadComponent: () => import('./error-demo/error-demo.component').then(m => m.ErrorDemoComponent) },
	{ path: 'testing-demo', loadComponent: () => import('./testing-demo/testing-demo.component').then(m => m.TestingDemoComponent) },
	{ path: 'api-demo', loadComponent: () => import('./api-demo/api-demo.component').then(m => m.ApiDemoComponent) },
	{ path: 'animations-demo', loadComponent: () => import('./animations-demo/animations-demo.component').then(m => m.AnimationsDemoComponent) },
	{ path: 'accessibility-demo', loadComponent: () => import('./accessibility-demo/accessibility-demo.component').then(m => m.AccessibilityDemoComponent) },
	{ path: 'glossary', loadComponent: () => import('./glossary/glossary.component').then(m => m.GlossaryComponent) },
	{ path: 'challenges', loadComponent: () => import('./challenges/challenges.component').then(m => m.ChallengesComponent) },
	{ path: '**', loadComponent: () => import('./error-page/error-page.component').then(m => m.ErrorPageComponent) }
];
