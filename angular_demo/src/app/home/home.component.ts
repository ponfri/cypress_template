import { Component, inject, ViewChild, ViewContainerRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MyIfDirective } from '../my-if.directive';
import { CommonModule } from '@angular/common';
import { StoreService } from '../store.service';
import { interval, take, map } from 'rxjs';
import { DynamicDemoComponent } from '../dynamic-demo.component';
import { HeaderComponent } from '../header.component';
import { MenuComponent } from '../menu.component';
import { TranslationPipe } from '../translation.pipe';
import { CardComponent } from '../card.component';
import { AdvancedFormComponent } from '../advanced-form.component';
import { LoginComponent } from '../login.component';
import { FooterComponent } from '../footer.component';
import { CdDemoComponent } from '../cd-demo.component';
import { Injector, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { registerAngularElements } from '../angular-elements';

@Component({
    selector: 'app-home',
    imports: [CommonModule, MyIfDirective, DynamicDemoComponent, TranslationPipe, CardComponent, AdvancedFormComponent, CdDemoComponent, FooterComponent, HeaderComponent, MenuComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    animations: [
        trigger('fadeInOut', [
            state('void', style({ opacity: 0 })),
            state('*', style({ opacity: 1 })),
            transition(':enter', [animate('600ms ease-in')]),
            transition(':leave', [animate('600ms ease-out')])
        ])
    ]
})
export class HomeComponent implements AfterViewInit {
  cdValue = 0;
  isAdmin = false;
  observableValue: string | null = null;
  store = inject(StoreService);
  showAnimated = false;
  @ViewChild('dynamicContainer', { read: ViewContainerRef, static: false }) dynamicContainer?: ViewContainerRef;

  constructor(private injector: Injector, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
          this.isAdmin = localStorage.getItem('currentUserRole') === 'admin';
        }
      }
    });
  }

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined' && typeof customElements !== 'undefined') {
      registerAngularElements(this.injector);
    }
  }

  triggerError() {
    throw new Error('Demo global error!');
  }

  toggleAnimation() {
    this.showAnimated = !this.showAnimated;
  }

  loadDynamic(): void {
    if (this.dynamicContainer) {
      this.dynamicContainer.clear();
      this.dynamicContainer.createComponent(DynamicDemoComponent);
    }
  }

  startObservableDemo(): void {
    interval(1000).pipe(
      take(5),
      map(i => `Tick ${i + 1}`)
    ).subscribe(val => {
      this.observableValue = val;
      if (val === 'Tick 5') {
        setTimeout(() => this.observableValue = null, 1000);
      }
    });
  }
}
