// cypress/e2e/pageObjects/BasePage.ts
export class BasePage {
  path: string;

  constructor(path: string) {
    this.path = path;
  }

  public visit(url?: string) {
    if (url) {
      cy.visit(url);
    } else {
      cy.visit(this.path || '/');
    }
    return this;
  }

  // Navigation menu elements (replace cy.contains with robust selectors)
  #navElements = {
    navCommands: () => cy.get('[data-cy="nav-commands"]'),
    navUtilities: () => cy.get('[data-cy="nav-utilities"]'),
    navCypressAPI: () => cy.get('[data-cy="nav-cypress-api"]'),
    navGitHub: () => cy.get('[data-cy="nav-github"]'),

    // Commands dropdown sub-menu elements
    commandsQuerying: () => cy.get('[data-cy="nav-querying"]'),
    commandsTraversal: () => cy.get('[data-cy="nav-traversal"]'),
    commandsActions: () => cy.get('[data-cy="nav-actions"]'),
    commandsWindow: () => cy.get('[data-cy="nav-window"]'),
    commandsViewport: () => cy.get('[data-cy="nav-viewport"]'),
    commandsLocation: () => cy.get('[data-cy="nav-location"]'),
    commandsNavigation: () => cy.get('[data-cy="nav-navigation"]'),
    commandsAssertions: () => cy.get('[data-cy="nav-assertions"]'),
    commandsMisc: () => cy.get('[data-cy="nav-misc"]'),
    commandsConnectors: () => cy.get('[data-cy="nav-connectors"]'),
    commandsAliasing: () => cy.get('[data-cy="nav-aliasing"]'),
    commandsWaiting: () => cy.get('[data-cy="nav-waiting"]'),
    commandsNetworkRequests: () => cy.get('[data-cy="nav-network-requests"]'),
    commandsFiles: () => cy.get('[data-cy="nav-files"]'),
    commandsStorage: () => cy.get('[data-cy="nav-storage"]'),
    commandsCookies: () => cy.get('[data-cy="nav-cookies"]'),
    commandsSpiesStubsClocks: () => cy.get('[data-cy="nav-spies-stubs-clocks"]'),
  }

  // Getters
  get navCommands(): Cypress.Chainable<JQuery<HTMLElement>> { return this.#navElements.navCommands(); }
  get navUtilities() { return this.#navElements.navUtilities(); }
  get navCypressAPI() { return this.#navElements.navCypressAPI(); }
  get navGitHub() { return this.#navElements.navGitHub(); }
  get commandsQuerying() { return this.#navElements.commandsQuerying(); }
  get commandsTraversal() { return this.#navElements.commandsTraversal(); }
  get commandsActions() { return this.#navElements.commandsActions(); }
  get commandsWindow() { return this.#navElements.commandsWindow(); }
  get commandsViewport() { return this.#navElements.commandsViewport(); }
  get commandsLocation() { return this.#navElements.commandsLocation(); }
  get commandsNavigation() { return this.#navElements.commandsNavigation(); }
  get commandsAssertions() { return this.#navElements.commandsAssertions(); }
  get commandsMisc() { return this.#navElements.commandsMisc(); }
  get commandsConnectors() { return this.#navElements.commandsConnectors(); }
  get commandsAliasing() { return this.#navElements.commandsAliasing(); }
  get commandsWaiting() { return this.#navElements.commandsWaiting(); }
  get commandsNetworkRequests() { return this.#navElements.commandsNetworkRequests(); }
  get commandsFiles() { return this.#navElements.commandsFiles(); }
  get commandsStorage() { return this.#navElements.commandsStorage(); }
  get commandsCookies() { return this.#navElements.commandsCookies(); }
  get commandsSpiesStubsClocks() { return this.#navElements.commandsSpiesStubsClocks(); }

  // Interaction methods
  clickNavCommands() { this.navCommands.click(); return this; }
  clickNavUtilities() { this.navUtilities.click(); return this; }
  clickNavCypressAPI() { this.navCypressAPI.click(); return this; }
  clickNavGitHub() { this.navGitHub.click(); return this; }
  clickCommandsQuerying() { this.commandsQuerying.click(); return this; }
  clickCommandsTraversal() { this.commandsTraversal.click(); return this; }
  clickCommandsActions() { this.commandsActions.click(); return this; }
  clickCommandsWindow() { this.commandsWindow.click(); return this; }
  clickCommandsViewport() { this.commandsViewport.click(); return this; }
  clickCommandsLocation() { this.commandsLocation.click(); return this; }
  clickCommandsNavigation() { this.commandsNavigation.click(); return this; }
  clickCommandsAssertions() { this.commandsAssertions.click(); return this; }
  clickCommandsMisc() { this.commandsMisc.click(); return this; }
  clickCommandsConnectors() { this.commandsConnectors.click(); return this; }
  clickCommandsAliasing() { this.commandsAliasing.click(); return this; }
  clickCommandsWaiting() { this.commandsWaiting.click(); return this; }
  clickCommandsNetworkRequests() { this.commandsNetworkRequests.click(); return this; }
  clickCommandsFiles() { this.commandsFiles.click(); return this; }
  clickCommandsStorage() { this.commandsStorage.click(); return this; }
  clickCommandsCookies() { this.commandsCookies.click(); return this; }
  clickCommandsSpiesStubsClocks() { this.commandsSpiesStubsClocks.click(); return this; }

      // Workflow methods

      /** Navigate to a sub-menu under Commands (e.g., Actions, Querying, etc.) */
      navigateToCommandsSubMenu(subMenu: 'Actions' | 'Querying' | 'Traversal' | 'Window' | 'Viewport' | 'Location' | 'Navigation' | 'Assertions' | 'Misc' | 'Connectors' | 'Aliasing' | 'Waiting' | 'Network Requests' | 'Files' | 'Storage' | 'Cookies' | 'Spies, Stubs & Clocks') {
        this.clickNavCommands();
        switch (subMenu) {
          case 'Actions': this.clickCommandsActions(); break;
          case 'Querying': this.clickCommandsQuerying(); break;
          case 'Traversal': this.clickCommandsTraversal(); break;
          case 'Window': this.clickCommandsWindow(); break;
          case 'Viewport': this.clickCommandsViewport(); break;
          case 'Location': this.clickCommandsLocation(); break;
          case 'Navigation': this.clickCommandsNavigation(); break;
          case 'Assertions': this.clickCommandsAssertions(); break;
          case 'Misc': this.clickCommandsMisc(); break;
          case 'Connectors': this.clickCommandsConnectors(); break;
          case 'Aliasing': this.clickCommandsAliasing(); break;
          case 'Waiting': this.clickCommandsWaiting(); break;
          case 'Network Requests': this.clickCommandsNetworkRequests(); break;
          case 'Files': this.clickCommandsFiles(); break;
          case 'Storage': this.clickCommandsStorage(); break;
          case 'Cookies': this.clickCommandsCookies(); break;
          case 'Spies, Stubs & Clocks': this.clickCommandsSpiesStubsClocks(); break;
        }
        return this;
      }

      /** Navigate to Utilities section */
      navigateToUtilities() {
        this.clickNavUtilities();
        return this;
      }

      /** Navigate to Cypress API section */
      navigateToCypressAPI() {
        this.clickNavCypressAPI();
        return this;
      }

      /** Navigate to GitHub (assertion should be in test) */
      navigateToGitHub() {
        this.clickNavGitHub();
        return this;
      }

      /** Click all main navigation links for smoke/regression navigation test */
      clickAllMainNavLinks() {
        this.clickNavCommands();
        this.clickNavUtilities();
        this.clickNavCypressAPI();
        this.clickNavGitHub();
        return this;
      }
}