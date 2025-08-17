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