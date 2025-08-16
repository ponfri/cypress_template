/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
    /**
     * Calls the Grok API with a prompt and returns the response as a string.
     * @param prompt The question or instruction to send to Grok
     */
    callGrok(prompt: string): Chainable<string>;
  }
}