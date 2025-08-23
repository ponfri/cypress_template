import { BasePage } from "./BasePage.po";

/**
 * Page Object for the Location page in Cypress Kitchen Sink
 * Covers all workflows for location commands: cy.hash, cy.location, cy.url
 */
export class LocationPage extends BasePage {
  // Private selectors for all relevant elements
  #elements = {
    navigationSection: "#navigation",
    cyHashHeader: "h4#hash a[href='https://on.cypress.io/hash']",
    cyLocationHeader: "h4#location a[href='https://on.cypress.io/location']",
    cyUrlHeader: "h4#url a[href='https://on.cypress.io/url']",
    cyHashCode: "pre code.javascript.hljs:contains('cy.hash')",
    cyLocationCode: "pre code.javascript.hljs:contains('cy.location')",
    cyUrlCode: "pre code.javascript.hljs:contains('cy.url')",
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
  verifyHash(expectedHash: string) {
    cy.hash().should("eq", expectedHash);
  }

  verifyLocationProperty(prop: keyof Location, expectedValue: string) {
    cy.location(prop).should("eq", expectedValue);
  }

  verifyUrl(expectedUrl: string) {
    cy.url().should("eq", expectedUrl);
  }

  clickAllHeaders() {
    this.clickCyHashHeader();
    this.clickCyLocationHeader();
    this.clickCyUrlHeader();
  }
}
