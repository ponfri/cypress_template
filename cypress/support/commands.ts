// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { Method } from 'cypress/types/net-stubbing';

// =========================
// Assertion Commands
// =========================
Cypress.Commands.add('assertText', (selector: string, expected: string) => {
  cy.get(selector).should('have.text', expected);
});

Cypress.Commands.add('measureApiResponseTime', (method: string, url: string, threshold: number) => {
  const start = Date.now();
  cy.request({ method, url }).then((response) => {
    const duration = Date.now() - start;
    expect(duration).to.be.lessThan(threshold);
  });
});

Cypress.Commands.add('measurePageLoadTime', (threshold: number) => {
  cy.window().then((win) => {
    const timing = win.performance.timing;
    const loadTime = timing.loadEventEnd - timing.navigationStart;
    expect(loadTime).to.be.lessThan(threshold);
  });
});

Cypress.Commands.add('measureResourceLoad', (selector: string, threshold: number) => {
  cy.get(selector).then(($el) => {
    const resource = $el[0];
    let src = '';
    if (resource instanceof HTMLImageElement || resource instanceof HTMLScriptElement) {
      src = resource.src;
    }
    if (src) {
      cy.window().then((win) => {
        const entries = win.performance.getEntriesByType('resource');
        const entry = entries.find((e) => (e as PerformanceResourceTiming).name === src);
        if (entry && 'responseEnd' in entry && 'startTime' in entry) {
          const perfEntry = entry as PerformanceResourceTiming;
          const duration = perfEntry.responseEnd - perfEntry.startTime;
          expect(duration).to.be.lessThan(threshold);
        }
      });
    }
  });
});

Cypress.Commands.add('isNotCovered', (selector: string, blockingSelector?: string) => {
  cy.get(selector).then(($el) => {
    const elRect = $el[0].getBoundingClientRect();
    if (blockingSelector) {
      cy.get(blockingSelector).then(($block) => {
        const blockRect = $block[0].getBoundingClientRect();
        const isCovered =
          blockRect.left < elRect.right &&
          blockRect.right > elRect.left &&
          blockRect.top < elRect.bottom &&
          blockRect.bottom > elRect.top;
        expect(isCovered).to.be.false;
      });
    } else {
      // No blockingSelector: check if element is at top layer
      cy.document().then((doc) => {
        const elAtPoint = doc.elementFromPoint(elRect.left + 1, elRect.top + 1);
        expect(elAtPoint).to.equal($el[0]);
      });
    }
  });
});

Cypress.Commands.add('isInteractable', (selector: string) => {
  cy.get(selector)
    .should('be.visible')
    .should('not.be.disabled')
    .then(($el) => {
      const elRect = $el[0].getBoundingClientRect();
      cy.document().then((doc) => {
        const elAtPoint = doc.elementFromPoint(elRect.left + 1, elRect.top + 1);
        expect(elAtPoint).to.equal($el[0]);
      });
      expect($el).to.have.css('pointer-events', 'auto');
    });
});

Cypress.Commands.add('hasPointerEvents', (selector: string, value: string = 'auto') => {
  cy.get(selector).should('have.css', 'pointer-events', value);
});

Cypress.Commands.add('hasCss', (selector: string, property: string, value: string) => {
  cy.get(selector).should('have.css', property, value);
});

Cypress.Commands.add('hasClass', (selector: string, className: string) => {
  cy.get(selector).should('have.class', className);
});

Cypress.Commands.add('notHasClass', (selector: string, className: string) => {
  cy.get(selector).should('not.have.class', className);
});

Cypress.Commands.add('hasStyle', (selector: string, style: Partial<CSSStyleDeclaration>) => {
  cy.get(selector).should(($el) => {
    for (const [prop, val] of Object.entries(style)) {
      expect($el).to.have.css(prop, val as string);
    }
  });
});

Cypress.Commands.add('assertVisible', (selector: string) => {
  cy.get(selector).should('be.visible');
});

// =========================
// API Commands
// =========================
Cypress.Commands.add('apiGetPayload', (method: string, url: string, options: Partial<Cypress.RequestOptions> = {}) => {
  return cy.request({ method, url, ...options }).then((response) => response.body);
});

Cypress.Commands.add('mockApi', (method: Method, url: string, mockData: string | object) => {
  const response = typeof mockData === 'string' ? { fixture: mockData } : mockData;
  cy.intercept(method, url, response).as('mockedApi');
});

// =========================
// Storage Commands
// =========================
Cypress.Commands.add('clearCookies', () => {
  cy.clearCookies();
});

Cypress.Commands.add('clearLocalStorage', () => {
  cy.clearLocalStorage();
});

Cypress.Commands.add('clearSessionStorage', () => {
  cy.window().then((win) => {
    win.sessionStorage.clear();
  });
});

// =========================
// UI Actions
// =========================
Cypress.Commands.add('getByTestId', (testId: string) => {
  return cy.get(`[data-testid="${testId}"]`);
});
Cypress.Commands.add('getByRole', (role: string) => {
  return cy.get(`[role="${role}"]`);
});

Cypress.Commands.add('getByPlaceholder', (placeholder: string) => {
  return cy.get(`[placeholder="${placeholder}"]`);
});

Cypress.Commands.add('getByLabelText', (labelText: string) => {
  return cy.contains('label', labelText).invoke('attr', 'for').then((id) => {
    return cy.get(`#${id}`);
  });
});

Cypress.Commands.add('getByText', (text: string) => {
  return cy.contains(text);
});

Cypress.Commands.add('forceClick', (selector: string) => {
  return cy.get(selector).click({ force: true });
});

Cypress.Commands.add('typeAndEnter', (selector: string, text: string) => {
  return cy.get(selector).type(text).type('{enter}');
});

Cypress.Commands.add('selectDropdownByValue', (selector: string, value: string) => {
  return cy.get(selector).select(value);
});

Cypress.Commands.add('isVisible', (selector: string) => {
  return cy.get(selector).should('be.visible');
});

Cypress.Commands.add('isHidden', (selector: string) => {
  return cy.get(selector).should('not.be.visible');
});

Cypress.Commands.add('getByClass', (className: string) => {
  return cy.get(`.${className}`);
});

Cypress.Commands.add('getById', (id: string) => {
  return cy.get(`#${id}`);
});

Cypress.Commands.add('scrollBelowFold', (duration: number = 1200) => {
  cy.window().then(win => {
    cy.scrollTo(0, win.innerHeight, { duration });
  });
});

Cypress.Commands.add('scrollToEnd', (duration: number = 1200) => {
  cy.window().then(() => {
    cy.scrollTo('bottom', { duration });
  });
});

Cypress.Commands.add('scrollToTop', (duration: number = 1200) => {
  cy.window().then(() => {
    cy.scrollTo('top', { duration });
  });
});

Cypress.Commands.add('setViewport', (width: number, height: number) => {
  cy.viewport(width, height);
});

Cypress.Commands.add('takeScreenshot', (name: string = 'screenshot') => {
  cy.screenshot(name);
});

Cypress.Commands.add('uploadFile', (selector: string, filePath: string) => {
  cy.get(selector).selectFile(filePath);
});

Cypress.Commands.add('waitForSelector', (selector: string, timeout: number = 10000) => {
  cy.get(selector, { timeout }).should('be.visible');
});

Cypress.Commands.add('waitForPageReady', () => {
  cy.document().should((doc) => {
    expect(doc.readyState).to.eq('complete');
  });
  cy.get('img').each(($img) => {
    cy.wrap($img).should(($el) => {
      const img = $el[0] as HTMLImageElement;
      expect(img.complete).to.be.true;
      expect(img.naturalWidth).to.be.greaterThan(0);
    });
  });
  cy.window().then((win) => {
    const angularTestabilities = (win as any).getAllAngularTestabilities;
    if (typeof angularTestabilities === 'function') {
      return new Cypress.Promise((resolve) => {
        const testabilities = angularTestabilities();
        let count = testabilities.length;
        testabilities.forEach((testability: any) => {
          testability.whenStable(() => {
            count--;
            if (count === 0) resolve();
          });
        });
      });
    }
  });
});


// =========================
// Utility Commands
// =========================
Cypress.Commands.add('logout', () => {
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.visit('/');
});

// =========================
// Network & Navigation Helpers
// =========================
Cypress.Commands.add('waitForNetworkIdle', (timeout: number = 10000) => {
  cy.window().then((win) => {
    const performance = win.performance;
    const checkIdle = () => {
      const entries = performance.getEntriesByType('resource');
      const now = Date.now();
      const active = entries.filter((e: any) => e.responseEnd > now - 100);
      return active.length === 0;
    };
    return new Cypress.Promise((resolve, reject) => {
      const start = Date.now();
      const poll = () => {
        if (checkIdle()) return resolve();
        if (Date.now() - start > timeout) return reject('Network idle timeout');
        setTimeout(poll, 100);
      };
      poll();
    });
  });
});

Cypress.Commands.add('waitForUrl', (url: string | RegExp, timeout: number = 10000) => {
  cy.url({ timeout }).should(typeof url === 'string' ? 'eq' : 'match', url);
});