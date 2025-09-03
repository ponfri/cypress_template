// Example Page Object
// This file demonstrates a simple page object pattern for Cypress tests.

export class ExamplePage {
  // Visit the example page
  visit() {
    cy.visit('/example');
  }

  // Get the main header element
  mainHeader() {
    return cy.get('h1.main-header');
  }

  // Get the example button element
  exampleButton() {
    return cy.get('button.example-btn');
  }

  // Click the example button
  clickExampleButton() {
    this.exampleButton().click();
  }

  // Get the result element
  result() {
    return cy.get('div.result');
  }
}
