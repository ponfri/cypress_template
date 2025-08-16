import { BasePage } from './BasePage';

export class LocationPage extends BasePage {
  // Private elements
  #elements = {
    header: () => cy.get('h1'), // "Location"
    subHeaderHash: () => cy.contains('h4', 'cy.hash()'),
    subHeaderLocation: () => cy.contains('h4', 'cy.location()'),
    subHeaderUrl: () => cy.contains('h4', 'cy.url()'),

    // Location commands
    hash: () => cy.hash(),
    location: () => cy.location(),
    url: () => cy.url(),

    // Additional links
    linkDocs: () => cy.contains('a', 'docs.cypress.io'),
    linkCypressIO: () => cy.contains('a', 'cypress.io'),
    linkGitHub: () => cy.contains('a', 'GitHub'),
    linkUtilities: () => cy.contains('a', 'Utilities'),
    linkCypressAPI: () => cy.contains('a', 'Cypress API'),
  }

  // Public getters
  get Header() { return this.#elements.header() }
  get SubHeaderHash() { return this.#elements.subHeaderHash() }
  get SubHeaderLocation() { return this.#elements.subHeaderLocation() }
  get SubHeaderUrl() { return this.#elements.subHeaderUrl() }
  get Hash() { return this.#elements.hash() }
  get Location() { return this.#elements.location() }
  get Url() { return this.#elements.url() }
  get LinkDocs() { return this.#elements.linkDocs() }
  get LinkCypressIO() { return this.#elements.linkCypressIO() }
  get LinkGitHub() { return this.#elements.linkGitHub() }
  get LinkUtilities() { return this.#elements.linkUtilities() }
  get LinkCypressAPI() { return this.#elements.linkCypressAPI() }

  // Interaction methods
  assertHashEmpty() {
    return this.#elements.hash().should('be.empty');
  }
  assertUrlEquals(url: string) {
    return this.#elements.url().should('eq', url);
  }
  assertLocation(callback: (location: Location) => void) {
    return this.#elements.location().should(callback);
  }
  clickLinkDocs() { return this.#elements.linkDocs().click() }
  clickLinkCypressIO() { return this.#elements.linkCypressIO().click() }
  clickLinkGitHub() { return this.#elements.linkGitHub().click() }
  clickLinkUtilities() { return this.#elements.linkUtilities().click() }
  clickLinkCypressAPI() { return this.#elements.linkCypressAPI().click() }
}