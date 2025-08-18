import { BasePage } from './BasePage.po';

/**
 * Page Object for the Location page in Cypress Kitchen Sink
 * Covers all workflows for location commands: cy.hash, cy.location, cy.url
 */
export class LocationPage extends BasePage {
  // Private selectors for all relevant elements
  #elements = {
    navigationSection: '#navigation',
    cyHashHeader: "h4#hash a[href='https://on.cypress.io/hash']",
    cyLocationHeader: "h4#location a[href='https://on.cypress.io/location']",
    cyUrlHeader: "h4#url a[href='https://on.cypress.io/url']",
    cyHashCode: "pre code.javascript.hljs:contains('cy.hash')",
    cyLocationCode: "pre code.javascript.hljs:contains('cy.location')",
    cyUrlCode: "pre code.javascript.hljs:contains('cy.url')",
  };

  // Getters for elements
  getNavigationSection() {
    return cy.get(this.#elements.navigationSection);
  }
  getCyHashHeader() {
    return cy.get(this.#elements.cyHashHeader);
  }
  getCyLocationHeader() {
    return cy.get(this.#elements.cyLocationHeader);
  }
  getCyUrlHeader() {
    return cy.get(this.#elements.cyUrlHeader);
  }
  getCyHashCode() {
    return cy.get(this.#elements.cyHashCode);
  }
  getCyLocationCode() {
    return cy.get(this.#elements.cyLocationCode);
  }
  getCyUrlCode() {
    return cy.get(this.#elements.cyUrlCode);
  }

  // Workflow methods for location commands
  getHash() {
    return cy.hash();
  }
  assertHashEmpty() {
    this.getHash().should('be.empty');
  }

  getLocation() {
    return cy.location();
  }
  assertLocation(expected: Partial<Location>) {
    this.getLocation().should(location => {
      if (expected.hash !== undefined) expect(location.hash).to.eq(expected.hash);
      if (expected.href !== undefined) expect(location.href).to.eq(expected.href);
      if (expected.host !== undefined) expect(location.host).to.eq(expected.host);
      if (expected.hostname !== undefined) expect(location.hostname).to.eq(expected.hostname);
      if (expected.origin !== undefined) expect(location.origin).to.eq(expected.origin);
      if (expected.pathname !== undefined) expect(location.pathname).to.eq(expected.pathname);
      if (expected.port !== undefined) expect(location.port).to.eq(expected.port);
      if (expected.protocol !== undefined) expect(location.protocol).to.eq(expected.protocol);
      if (expected.search !== undefined) expect(location.search).to.eq(expected.search);
    });
  }

  getUrl() {
    return cy.url();
  }
  assertUrl(expectedUrl: string) {
    this.getUrl().should('eq', expectedUrl);
  }

  // Assertion for cy.hash(), cy.location(), cy.url() headers and code blocks
  assertCyHashHeaderVisible() {
    this.getCyHashHeader().should('be.visible');
  }
  assertCyLocationHeaderVisible() {
    this.getCyLocationHeader().should('be.visible');
  }
  assertCyUrlHeaderVisible() {
    this.getCyUrlHeader().should('be.visible');
  }
  assertCyHashCodeVisible() {
    this.getCyHashCode().should('be.visible');
  }
  assertCyLocationCodeVisible() {
    this.getCyLocationCode().should('be.visible');
  }
  assertCyUrlCodeVisible() {
    this.getCyUrlCode().should('be.visible');
  }
}
