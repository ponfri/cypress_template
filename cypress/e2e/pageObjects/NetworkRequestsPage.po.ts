import { BasePage } from './BasePage';

export class NetworkRequestsPage extends BasePage {
  constructor() {
    super('/commands/network-requests');
  }

  // Private element locators
  #elements = {
    networkBtn: () => cy.get('.network-btn'),
    networkPost: () => cy.get('.network-post'),
    networkPut: () => cy.get('.network-put'),
    networkPutComment: () => cy.get('.network-put-comment'),
    networkHeader: () => cy.contains('h1, h2, h3, h4', 'Network Requests'),
    cyRequestCommandLink: () => cy.contains('a', 'cy.request()'),
    cyInterceptCommandLink: () => cy.contains('a', 'cy.intercept()'),
    getCommentButton: () => cy.contains('button', 'Get Comment'),
    postCommentButton: () => cy.contains('button', 'Post Comment'),
    updateCommentButton: () => cy.contains('button', 'Update Comment'),
    additionalLinks: {
      cypressIo: () => cy.contains('a', 'cypress.io'),
      utilities: () => cy.contains('a', 'Utilities'),
      cypressApi: () => cy.contains('a', 'Cypress API'),
      github: () => cy.contains('a', 'GitHub'),
    },
  };

  // Public getters
  get networkBtn() { return this.#elements.networkBtn(); }
  get networkPost() { return this.#elements.networkPost(); }
  get networkPut() { return this.#elements.networkPut(); }
  get networkPutComment() { return this.#elements.networkPutComment(); }
  get networkHeader() { return this.#elements.networkHeader(); }
  get cyRequestCommandLink() { return this.#elements.cyRequestCommandLink(); }
  get cyInterceptCommandLink() { return this.#elements.cyInterceptCommandLink(); }
  get getCommentButton() { return this.#elements.getCommentButton(); }
  get postCommentButton() { return this.#elements.postCommentButton(); }
  get updateCommentButton() { return this.#elements.updateCommentButton(); }
  get additionalLinks() { return this.#elements.additionalLinks; }

  // Interaction methods
  clickNetworkBtn() {
    return this.#elements.networkBtn().click();
  }
  clickNetworkPost() {
    return this.#elements.networkPost().click();
  }
  clickNetworkPut() {
    return this.#elements.networkPut().click();
  }
  clickGetCommentButton() {
    return this.#elements.getCommentButton().click();
  }
  clickPostCommentButton() {
    return this.#elements.postCommentButton().click();
  }
  clickUpdateCommentButton() {
    return this.#elements.updateCommentButton().click();
  }
  clickCyRequestCommandLink() {
    return this.#elements.cyRequestCommandLink().click();
  }
  clickCyInterceptCommandLink() {
    return this.#elements.cyInterceptCommandLink().click();
  }

  // Workflow examples
  interceptGetCommentAndWait() {
    cy.intercept('GET', '**/comments/*').as('getComment');
    this.clickNetworkBtn();
    cy.wait('@getComment').its('response.statusCode').should('be.oneOf', [200, 304]);
  }

  interceptPostCommentAndWait() {
    cy.intercept('POST', '**/comments').as('postComment');
    this.clickNetworkPost();
    cy.wait('@postComment').should(({ request, response }) => {
      expect(request.body).to.include('email');
      expect(request.headers).to.have.property('content-type');
      expect(response && response.body).to.have.property('name', 'Using POST in cy.intercept()');
    });
  }

  interceptPutCommentAndWait(message: string) {
    cy.intercept({ method: 'PUT', url: '**/comments/*' }, {
      statusCode: 404,
      body: { error: message },
      headers: { 'access-control-allow-origin': '*' },
      delayMs: 500,
    }).as('putComment');
    this.clickNetworkPut();
    cy.wait('@putComment');
    this.#elements.networkPutComment().should('contain', message);
  }
}
