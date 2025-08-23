import { BasePage } from "./BasePage.po";

/**
 * Page Object for the Location page in Cypress Kitchen Sink
 * Covers all workflows for location commands: cy.hash, cy.location, cy.url
 */
export class LocationPage extends BasePage {
  // Private selectors for all relevant elements
  #elements = {
    navigationSection: "#navigation[data-cy=\"navigation-section\"]",
    cyHashHeader: "h4[data-cy=\"cy-hash-header\"] a[data-cy=\"cy-hash-link\"]",
    cyLocationHeader: "h4[data-cy=\"cy-location-header\"] a[data-cy=\"cy-location-link\"]",
    cyUrlHeader: "h4[data-cy=\"cy-url-header\"] a[data-cy=\"cy-url-link\"]",
    cyHashCode: "pre code.javascript.hljs[data-cy=\"cy-hash-code\"]",
    cyLocationCode: "pre code.javascript.hljs[data-cy=\"cy-location-code\"]",
    cyUrlCode: "pre code.javascript.hljs[data-cy=\"cy-url-code\"]",
  };

  // Getters for all locators
  get navigationSection() {
    return cy.get(this.#elements.navigationSection);
  }
  get cyHashHeader() {
    return cy.get(this.#elements.cyHashHeader);
  }
  get cyLocationHeader() {
    return cy.get(this.#elements.cyLocationHeader);
  }
  get cyUrlHeader() {
    return cy.get(this.#elements.cyUrlHeader);
  }
  get cyHashCode() {
    return cy.get(this.#elements.cyHashCode);
  }
  get cyLocationCode() {
    return cy.get(this.#elements.cyLocationCode);
  }
  get cyUrlCode() {
    return cy.get(this.#elements.cyUrlCode);
  }

  // Interaction methods
  clickCyHashHeader() {
    this.cyHashHeader.click();
  }
  clickCyLocationHeader() {
    this.cyLocationHeader.click();
  }
  clickCyUrlHeader() {
    this.cyUrlHeader.click();
  }

  // Workflow methods
  verifyHash() {
    // Assertion should be done in test, not here
    return this;
  }

  verifyLocationProperty() {
    // Assertion should be done in test, not here
    return this;
  }

  verifyUrl() {
    // Assertion should be done in test, not here
    return this;
  }

  clickAllHeaders() {
    this.clickCyHashHeader();
    this.clickCyLocationHeader();
    this.clickCyUrlHeader();
    return this;
  }
}
