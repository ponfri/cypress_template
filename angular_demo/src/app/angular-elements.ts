import { Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { DynamicDemoComponent } from './dynamic-demo/dynamic-demo.component';

export function registerAngularElements(injector: Injector) {
  const dynamicDemoElement = createCustomElement(DynamicDemoComponent, { injector });
  if (typeof window !== 'undefined' && typeof customElements !== 'undefined') {
    if (!customElements.get('dynamic-demo-element')) {
      customElements.define('dynamic-demo-element', dynamicDemoElement);
    }
  }
}
