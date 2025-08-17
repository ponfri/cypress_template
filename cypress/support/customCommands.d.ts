/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    /**
     * Scrolls the page just below the visible fold (viewport).
     * @param duration Optional scroll animation duration in milliseconds. Default is 1200.
     * @returns Chainable<void>
     * @example cy.scrollBelowFold() // uses default duration
     * @example cy.scrollBelowFold(500) // uses custom duration
     */
    scrollBelowFold(duration?: number): Chainable<void>;

    /**
     * Scrolls to the end (bottom) of the page.
     * @param duration Optional scroll animation duration in milliseconds. Default is 1200.
     * @returns Chainable<void>
     * @example cy.scrollToEnd() // uses default duration
     * @example cy.scrollToEnd(500) // uses custom duration
     */
    scrollToEnd(duration?: number): Chainable<void>;

    /**
     * Scrolls to the top of the page.
     * @param duration Optional scroll animation duration in milliseconds. Default is 1200.
     * @returns Chainable<void>
     * @example cy.scrollToTop() // uses default duration
     * @example cy.scrollToTop(500) // uses custom duration
     */
    scrollToTop(duration?: number): Chainable<void>;
    
    /**
     * Waits for the page to be fully loaded, all images to be loaded, and (if Angular is present) for the app to be stable.
     * Checks document readiness, image loading, and optionally Angular stability.
     * @returns Chainable<void>
     * @example cy.waitForPageReady()
     */
    waitForPageReady(): Chainable<void>;
  }
}
