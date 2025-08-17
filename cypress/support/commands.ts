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


// Utility Commands
// =========================
Cypress.Commands.add('logout', () => {
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.visit('/');
});