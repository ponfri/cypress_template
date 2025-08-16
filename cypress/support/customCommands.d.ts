/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    /**
     * Calls the Grok API with a prompt and returns the response as a string.
     * @param prompt The question or instruction to send to Grok
     */
    callGrok(prompt: string): Chainable<string>;

    /**
     * Scrolls the page just below the visible fold (viewport).
     */
    scrollBelowFold(): Chainable<void>;

    /**
     * Scrolls to the end (bottom) of the page.
     */
    scrollToEnd(): Chainable<void>;

    /**
     * Custom command to scroll to the top of the page.
     * @example cy.scrollToTop()
     */
    scrollToTop(): Chainable<void>;
    
    /**
     * Custom command to wait for the page to be fully loaded and all elements in the DOM.
     * @example cy.waitForPageReady()
     */
    waitForPageReady(): Chainable<void>;
  }
}
