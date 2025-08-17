/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    /**
     * Scrolls the page just below the visible fold (viewport).
     * @returns Chainable<void>
     * @example cy.scrollBelowFold()
     */
    scrollBelowFold(): Chainable<void>;

    /**
     * Scrolls to the end (bottom) of the page.
     * @returns Chainable<void>
     * @example cy.scrollToEnd()
     */
    scrollToEnd(): Chainable<void>;

    /**
     * Scrolls to the top of the page.
     * @returns Chainable<void>
     * @example cy.scrollToTop()
     */
    scrollToTop(): Chainable<void>;
    
    /**
     * Waits for the page to be fully loaded and all elements in the DOM.
     * @returns Chainable<void>
     * @example cy.waitForPageReady()
     */
    waitForPageReady(): Chainable<void>;
  }
}
