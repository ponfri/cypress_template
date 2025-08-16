import { BasePage } from './BasePage';

export type ViewportPreset =
  | 'macbook-15' | 'macbook-13' | 'macbook-11'
  | 'ipad-2' | 'ipad-mini'
  | 'iphone-6+' | 'iphone-6' | 'iphone-5' | 'iphone-4' | 'iphone-3';

export type ViewportOrientation = 'portrait' | 'landscape';

export class ViewportPage extends BasePage {
  // Private elements
  #elements = {
    header: () => cy.get('h1'), // "Viewport"
    subHeaderViewport: () => cy.contains('h4', 'cy.viewport()'),
    navbar: () => cy.get('#navbar'),
    navbarToggle: () => cy.get('.navbar-toggle'),
    navLinks: () => cy.get('.nav').find('a'),

    // Additional links
    linkDocs: () => cy.contains('a', 'docs.cypress.io'),
    linkCypressIO: () => cy.contains('a', 'cypress.io'),
    linkGitHub: () => cy.contains('a', 'GitHub'),
    linkUtilities: () => cy.contains('a', 'Utilities'),
    linkCypressAPI: () => cy.contains('a', 'Cypress API'),
  }

  // Public getters
  get Header() { return this.#elements.header() }
  get SubHeaderViewport() { return this.#elements.subHeaderViewport() }
  get Navbar() { return this.#elements.navbar() }
  get NavbarToggle() { return this.#elements.navbarToggle() }
  get NavLinks() { return this.#elements.navLinks() }
  get LinkDocs() { return this.#elements.linkDocs() }
  get LinkCypressIO() { return this.#elements.linkCypressIO() }
  get LinkGitHub() { return this.#elements.linkGitHub() }
  get LinkUtilities() { return this.#elements.linkUtilities() }
  get LinkCypressAPI() { return this.#elements.linkCypressAPI() }

  // Interaction methods
  clickNavbarToggle() { return this.#elements.navbarToggle().click() }
  clickNavLink(index: number) { return this.#elements.navLinks().eq(index).click() }
  clickLinkDocs() { return this.#elements.linkDocs().click() }
  clickLinkCypressIO() { return this.#elements.linkCypressIO().click() }
  clickLinkGitHub() { return this.#elements.linkGitHub().click() }
  clickLinkUtilities() { return this.#elements.linkUtilities().click() }
  clickLinkCypressAPI() { return this.#elements.linkCypressAPI().click() }

  // Workflow methods
  setViewport(size: ViewportPreset | [number, number], orientation?: ViewportOrientation) {
    if (typeof size === 'string') {
      cy.viewport(size as ViewportPreset, orientation);
    } else {
      cy.viewport(size[0], size[1]);
    }
  }
}