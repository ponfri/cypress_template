import { BasePage } from './BasePage';

export class ConnectorsPage extends BasePage {
  // Private elements
  #elements = {
    header: () => cy.get('h1'), // "Connectors"
    subHeaderEach: () => cy.contains('h4', '.each()'),
    subHeaderIts: () => cy.contains('h4', '.its()'),
    subHeaderInvoke: () => cy.contains('h4', '.invoke()'),
    subHeaderSpread: () => cy.contains('h4', '.spread()'),
    subHeaderThen: () => cy.contains('h4', '.then()'),

    connectorsEachUl: () => cy.get('.connectors-each-ul>li'),
    connectorsItsUl: () => cy.get('.connectors-its-ul>li'),
    connectorsDiv: () => cy.get('.connectors-div'),
    connectorsList: () => cy.get('.connectors-list>li'),

    // Additional links
    linkDocs: () => cy.contains('a', 'docs.cypress.io'),
    linkCypressIO: () => cy.contains('a', 'cypress.io'),
    linkGitHub: () => cy.contains('a', 'GitHub'),
    linkUtilities: () => cy.contains('a', 'Utilities'),
    linkCypressAPI: () => cy.contains('a', 'Cypress API'),
  }

  // Public getters
  get Header() { return this.#elements.header() }
  get SubHeaderEach() { return this.#elements.subHeaderEach() }
  get SubHeaderIts() { return this.#elements.subHeaderIts() }
  get SubHeaderInvoke() { return this.#elements.subHeaderInvoke() }
  get SubHeaderSpread() { return this.#elements.subHeaderSpread() }
  get SubHeaderThen() { return this.#elements.subHeaderThen() }
  get ConnectorsEachUl() { return this.#elements.connectorsEachUl() }
  get ConnectorsItsUl() { return this.#elements.connectorsItsUl() }
  get ConnectorsDiv() { return this.#elements.connectorsDiv() }
  get ConnectorsList() { return this.#elements.connectorsList() }
  get LinkDocs() { return this.#elements.linkDocs() }
  get LinkCypressIO() { return this.#elements.linkCypressIO() }
  get LinkGitHub() { return this.#elements.linkGitHub() }
  get LinkUtilities() { return this.#elements.linkUtilities() }
  get LinkCypressAPI() { return this.#elements.linkCypressAPI() }

  // Interaction methods
  eachOnConnectorsEachUl(callback: ($el: JQuery<HTMLElement>, index: number, $list: HTMLElement[]) => void) {
  return this.#elements.connectorsEachUl().each(callback);
}
  itsOnConnectorsItsUl(property: string) {
    return this.#elements.connectorsItsUl().its(property);
  }
  invokeOnConnectorsDiv(method: string) {
    return this.#elements.connectorsDiv().invoke(method);
  }
  spreadOnArray<T>(arr: T[], callback: (...args: T[]) => void) {
    return cy.wrap(arr).spread(callback);
  }
  thenOnConnectorsList(callback: (lis: JQuery<HTMLElement>) => void) {
    return this.#elements.connectorsList().then(callback);
  }
  clickLinkDocs() { return this.#elements.linkDocs().click() }
  clickLinkCypressIO() { return this.#elements.linkCypressIO().click() }
  clickLinkGitHub() { return this.#elements.linkGitHub().click() }
  clickLinkUtilities() { return this.#elements.linkUtilities().click() }
  clickLinkCypressAPI() { return this.#elements.linkCypressAPI().click() }
}