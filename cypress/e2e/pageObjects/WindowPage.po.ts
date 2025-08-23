import { BasePage } from './BasePage.po';

export default class WindowPage extends BasePage {
  // Private selectors for all relevant elements
  #elements = {
    windowSection: '#window[data-cy="window-section"]',
    cyWindowHeader: 'h4[data-cy="cy-window-header"]',
    cyWindowCode: 'pre code.javascript.hljs[data-cy="cy-window-code"]',
    cyDocumentHeader: 'h4[data-cy="cy-document-header"]',
    cyDocumentCode: 'pre code.javascript.hljs[data-cy="cy-document-code"]',
    cyTitleHeader: 'h4[data-cy="cy-title-header"]',
    cyTitleCode: 'pre code.javascript.hljs[data-cy="cy-title-code"]',
  };

  // Getters for all locators
  get windowSection() { return cy.get(this.#elements.windowSection); }
  get cyWindowHeader() { return cy.get(this.#elements.cyWindowHeader); }
  get cyWindowCode() { return cy.get(this.#elements.cyWindowCode); }
  get cyDocumentHeader() { return cy.get(this.#elements.cyDocumentHeader); }
  get cyDocumentCode() { return cy.get(this.#elements.cyDocumentCode); }
  get cyTitleHeader() { return cy.get(this.#elements.cyTitleHeader); }
  get cyTitleCode() { return cy.get(this.#elements.cyTitleCode); }

  // Interaction methods
  clickWindowSection() { this.windowSection.click(); return this; }
  clickCyWindowHeader() { this.cyWindowHeader.click(); return this; }
  clickCyWindowCode() { this.cyWindowCode.click(); return this; }
  clickCyDocumentHeader() { this.cyDocumentHeader.click(); return this; }
  clickCyDocumentCode() { this.cyDocumentCode.click(); return this; }
  clickCyTitleHeader() { this.cyTitleHeader.click(); return this; }
  clickCyTitleCode() { this.cyTitleCode.click(); return this; }

  // Workflow methods
  demonstrateAllWindowCommands() {
    this.clickCyWindowHeader();
    this.clickCyWindowCode();
    this.clickCyDocumentHeader();
    this.clickCyDocumentCode();
    this.clickCyTitleHeader();
    this.clickCyTitleCode();
    return this;
  }

  // Assertions should be done in test, not here

  exploreAllWindowSections() {
    this.demonstrateAllWindowCommands();
    // Assertion removed; should be in test
    return this;
  }
}
