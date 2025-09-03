// Example Cypress Spec File
// This file demonstrates a simple test using a page object.

import { ExamplePage } from '../pageObjects/ExamplePage.po';

const examplePage = new ExamplePage();

// All tests must be inside a describe block
// Use 'it.only' during development to focus on a single test

describe('Example Page Test', () => {
  beforeEach(() => {
    // Visit the example page before each test
    examplePage.visit();
  });

  it('should display the main header', () => {
    // Assert that the header is visible
    examplePage.mainHeader().should('be.visible');
  });

  it('should click the example button and show a result', () => {
    // Click the button using the page object method
    examplePage.clickExampleButton();
    // Assert that the result is displayed
    examplePage.result().should('contain.text', 'Success!');
  });
});
