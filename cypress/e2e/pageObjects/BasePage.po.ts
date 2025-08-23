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
  }

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
    clickNavCommands() { this.navCommands.click(); }
    clickNavUtilities() { this.navUtilities.click(); }
    clickNavCypressAPI() { this.navCypressAPI.click(); }
    clickNavGitHub() { this.navGitHub.click(); }
    clickCommandsQuerying() { this.commandsQuerying.click(); }
    clickCommandsTraversal() { this.commandsTraversal.click(); }
    clickCommandsActions() { this.commandsActions.click(); }
    clickCommandsWindow() { this.commandsWindow.click(); }
    clickCommandsViewport() { this.commandsViewport.click(); }
    clickCommandsLocation() { this.commandsLocation.click(); }
    clickCommandsNavigation() { this.commandsNavigation.click(); }
    clickCommandsAssertions() { this.commandsAssertions.click(); }
    clickCommandsMisc() { this.commandsMisc.click(); }
    clickCommandsConnectors() { this.commandsConnectors.click(); }
    clickCommandsAliasing() { this.commandsAliasing.click(); }
    clickCommandsWaiting() { this.commandsWaiting.click(); }
    clickCommandsNetworkRequests() { this.commandsNetworkRequests.click(); }
    clickCommandsFiles() { this.commandsFiles.click(); }
    clickCommandsStorage() { this.commandsStorage.click(); }
    clickCommandsCookies() { this.commandsCookies.click(); }
    clickCommandsSpiesStubsClocks() { this.commandsSpiesStubsClocks.click(); }

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
      }

      /** Navigate to Utilities section */
      navigateToUtilities() {
        this.clickNavUtilities();
      }

      /** Navigate to Cypress API section */
      navigateToCypressAPI() {
        this.clickNavCypressAPI();
      }

      /** Navigate to GitHub and assert redirect */
      navigateToGitHubAndAssert() {
        this.clickNavGitHub();
        cy.url().should('include', 'github.com');
      }

      /** Click all main navigation links for smoke/regression navigation test */
      clickAllMainNavLinks() {
        this.clickNavCommands();
        this.clickNavUtilities();
        this.clickNavCypressAPI();
        this.clickNavGitHub();
      }
}