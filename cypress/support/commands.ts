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
Cypress.Commands.add('scrollBelowFold', () => {
  cy.window().then(win => {
    cy.scrollTo(0, win.innerHeight, { duration: 1200 }); // 1200ms for visible scroll
  });
});

// Custom command: Scroll to the end of the page
Cypress.Commands.add('scrollToEnd', () => {
  cy.window().then(() => {
    cy.scrollTo('bottom', { duration: 1200 });
  });
});

// Custom command: Scroll to the top of the page
Cypress.Commands.add('scrollToTop', () => {
  cy.window().then(() => {
    cy.scrollTo('top', { duration: 1200 });
  });
});

// Custom command: Wait for page to be fully loaded and all elements in the DOM
Cypress.Commands.add('waitForPageReady', () => {
  // Wait for document.readyState to be 'complete'
  cy.document().should(doc => {
    expect(doc.readyState).to.eq('complete');
  });
  // Optionally, wait for all images to be loaded
  cy.get('body').then($body => {
    const images = $body.find('img');
    if (images.length) {
      cy.wrap(images).each($img => {
        // Only check that the image is loaded, not visible
        cy.wrap($img).should($el => {
          expect(($el[0] as HTMLImageElement).complete).to.be.true;
        });
      });
    }
  });
});