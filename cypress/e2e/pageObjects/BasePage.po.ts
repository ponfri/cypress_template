// cypress/e2e/pageObjects/BasePage.ts
export class BasePage {
  path: string;

  constructor(path: string) {
    this.path = path;
  }

  // visit() {
  //   cy.visit(this.path); // baseUrl from cypress.config.ts will be prepended
  // }

  // Navigation menu elements
  #navElements = {
    navCommands: () => cy.contains('a', 'Commands'),
    navUtilities: () => cy.contains('a', 'Utilities'),
    navCypressAPI: () => cy.contains('a', 'Cypress API'),
    navGitHub: () => cy.contains('a', 'GitHub'),

    // Commands dropdown sub-menu elements
    commandsQuerying: () => cy.contains('a', 'Querying'),
    commandsTraversal: () => cy.contains('a', 'Traversal'),
    commandsActions: () => cy.contains('a', 'Actions'),
    commandsWindow: () => cy.contains('a', 'Window'),
    commandsViewport: () => cy.contains('a', 'Viewport'),
    commandsLocation: () => cy.contains('a', 'Location'),
    commandsNavigation: () => cy.contains('a', 'Navigation'),
    commandsAssertions: () => cy.contains('a', 'Assertions'),
    commandsMisc: () => cy.contains('a', 'Misc'),
    commandsConnectors: () => cy.contains('a', 'Connectors'),
    commandsAliasing: () => cy.contains('a', 'Aliasing'),
    commandsWaiting: () => cy.contains('a', 'Waiting'),
    commandsNetworkRequests: () => cy.contains('a', 'Network Requests'),
    commandsFiles: () => cy.contains('a', 'Files'),
    commandsStorage: () => cy.contains('a', 'Storage'),
    commandsCookies: () => cy.contains('a', 'Cookies'),
    commandsSpiesStubsClocks: () => cy.contains('a', 'Spies, Stubs & Clocks'),
  }

  // Public getters for navigation and Commands sub-menu
  get NavCommands() { return this.#navElements.navCommands() }
  get NavUtilities() { return this.#navElements.navUtilities() }
  get NavCypressAPI() { return this.#navElements.navCypressAPI() }
  get NavGitHub() { return this.#navElements.navGitHub() }

  get CommandsQuerying() { return this.#navElements.commandsQuerying() }
  get CommandsTraversal() { return this.#navElements.commandsTraversal() }
  get CommandsActions() { return this.#navElements.commandsActions() }
  get CommandsWindow() { return this.#navElements.commandsWindow() }
  get CommandsViewport() { return this.#navElements.commandsViewport() }
  get CommandsLocation() { return this.#navElements.commandsLocation() }
  get CommandsNavigation() { return this.#navElements.commandsNavigation() }
  get CommandsAssertions() { return this.#navElements.commandsAssertions() }
  get CommandsMisc() { return this.#navElements.commandsMisc() }
  get CommandsConnectors() { return this.#navElements.commandsConnectors() }
  get CommandsAliasing() { return this.#navElements.commandsAliasing() }
  get CommandsWaiting() { return this.#navElements.commandsWaiting() }
  get CommandsNetworkRequests() { return this.#navElements.commandsNetworkRequests() }
  get CommandsFiles() { return this.#navElements.commandsFiles() }
  get CommandsStorage() { return this.#navElements.commandsStorage() }
  get CommandsCookies() { return this.#navElements.commandsCookies() }
  get CommandsSpiesStubsClocks() { return this.#navElements.commandsSpiesStubsClocks() }

  // Interaction methods for navigation and Commands sub-menu
  clickNavCommands() { return this.#navElements.navCommands().click() }
  clickNavUtilities() { return this.#navElements.navUtilities().click() }
  clickNavCypressAPI() { return this.#navElements.navCypressAPI().click() }
  clickNavGitHub() { return this.#navElements.navGitHub().click() }

  clickCommandsQuerying() { return this.#navElements.commandsQuerying().click() }
  clickCommandsTraversal() { return this.#navElements.commandsTraversal().click() }
  clickCommandsActions() { return this.#navElements.commandsActions().click() }
  clickCommandsWindow() { return this.#navElements.commandsWindow().click() }
  clickCommandsViewport() { return this.#navElements.commandsViewport().click() }
  clickCommandsLocation() { return this.#navElements.commandsLocation().click() }
  clickCommandsNavigation() { return this.#navElements.commandsNavigation().click() }
  clickCommandsAssertions() { return this.#navElements.commandsAssertions().click() }
  clickCommandsMisc() { return this.#navElements.commandsMisc().click() }
  clickCommandsConnectors() { return this.#navElements.commandsConnectors().click() }
  clickCommandsAliasing() { return this.#navElements.commandsAliasing().click() }
  clickCommandsWaiting() { return this.#navElements.commandsWaiting().click() }
  clickCommandsNetworkRequests() { return this.#navElements.commandsNetworkRequests().click() }
  clickCommandsFiles() { return this.#navElements.commandsFiles().click() }
  clickCommandsStorage() { return this.#navElements.commandsStorage().click() }
  clickCommandsCookies() { return this.#navElements.commandsCookies().click() }
  clickCommandsSpiesStubsClocks() { return this.#navElements.commandsSpiesStubsClocks().click() }

  // Utility: visit page
  visit(url?: string) {
    if (url) {
      cy.visit(url);
    } else {
      cy.visit('/');
    }
  }
}