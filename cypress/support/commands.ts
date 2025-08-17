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

// Custom command: Scroll page below the fold
Cypress.Commands.add('scrollBelowFold', (duration: number = 1200) => {
  cy.window().then(win => {
    cy.scrollTo(0, win.innerHeight, { duration }); // Correct usage for coordinates
  });
});

// Custom command: Scroll to the end of the page
Cypress.Commands.add('scrollToEnd', (duration: number = 1200) => {
  cy.window().then(() => {
    cy.scrollTo('bottom', { duration }); // Correct usage for position string
  });
});

// Custom command: Scroll to the top of the page
Cypress.Commands.add('scrollToTop', (duration: number = 1200) => {
  cy.window().then(() => {
    cy.scrollTo('top', { duration }); // Correct usage for position string
  });
});

// Custom command: Wait for page to be fully loaded and all elements in the DOM
Cypress.Commands.add('waitForPageReady', () => {
  // Wait for document.readyState to be 'complete'
  cy.document().should((doc) => {
    expect(doc.readyState).to.eq('complete');
  });

  // Wait for all images to be loaded
  cy.get('img').each(($img) => {
    cy.wrap($img).should(($el) => {
      const img = $el[0] as HTMLImageElement;
      expect(img.complete).to.be.true;
      expect(img.naturalWidth).to.be.greaterThan(0);
    });
  });

  // Optionally, wait for Angular to be stable if present
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

// Custom command to make an API request and return the response payload
Cypress.Commands.add('apiGetPayload', (method: string, url: string, options: Partial<Cypress.RequestOptions> = {}) => {
  return cy.request({ method, url, ...options }).then((response) => response.body);
});

// Custom command to mock an API call with a fixture or object
// Usage: cy.mockApi('GET', '/api/data', 'example.json')
//        cy.mockApi('POST', '/api/login', { success: true })
Cypress.Commands.add('mockApi', (method: Method, url: string, mockData: string | object) => {
  const response = typeof mockData === 'string' ? { fixture: mockData } : mockData;
  cy.intercept(method, url, response).as('mockedApi');
});

// Custom command to log out (example: clear cookies and local storage)
Cypress.Commands.add('logout', () => {
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.visit('/'); // Optionally redirect to home or login page
});

// Custom command to select elements by data-testid attribute
Cypress.Commands.add('getByTestId', (testId: string) => {
  return cy.get(`[data-testid="${testId}"]`);
});

// Custom command to set viewport size
Cypress.Commands.add('setViewport', (width: number, height: number) => {
  cy.viewport(width, height);
});

// Custom command to wait for a selector to be visible
Cypress.Commands.add('waitForSelector', (selector: string, timeout: number = 10000) => {
  cy.get(selector, { timeout }).should('be.visible');
});

// Custom command to assert text content
Cypress.Commands.add('assertText', (selector: string, expected: string) => {
  cy.get(selector).should('have.text', expected);
});

// Custom command to assert element is visible
Cypress.Commands.add('assertVisible', (selector: string) => {
  cy.get(selector).should('be.visible');
});

// Custom command to upload a file
Cypress.Commands.add('uploadFile', (selector: string, filePath: string) => {
  cy.get(selector).selectFile(filePath);
});

// Custom command to take a screenshot
Cypress.Commands.add('takeScreenshot', (name: string = 'screenshot') => {
  cy.screenshot(name);
});

// Custom command to clear session storage
Cypress.Commands.add('clearSessionStorage', () => {
  cy.window().then((win) => {
    win.sessionStorage.clear();
  });
});

// Custom command to clear all cookies
Cypress.Commands.add('clearCookies', () => {
  cy.clearCookies();
});

// Custom command to clear local storage
Cypress.Commands.add('clearLocalStorage', () => {
  cy.clearLocalStorage();
});