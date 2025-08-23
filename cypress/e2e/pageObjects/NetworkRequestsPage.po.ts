import { BasePage } from './BasePage.po';

/**
 * Page Object for the Network Requests page in Cypress Kitchen Sink
 * Covers all workflows for cy.request(), cy.intercept(), network buttons, comment divs, code blocks, and external links
 */
export default class NetworkRequestsPage extends BasePage {

		// Private selectors for all relevant elements
		#elements = {
			networkRequestsSection: '#network-requests',
			cyRequestHeader: "h4#request:has(a[href='https://on.cypress.io/request'])",
			cyRequestCode: "pre code.javascript.hljs",
			cyInterceptHeader: "h4#http:has(a[href='https://on.cypress.io/intercept'])",
			cyInterceptCode: "pre code.javascript.hljs",
			networkBtn: '.network-btn',
			networkComment: '.network-comment',
			networkPostBtn: '.network-post',
			networkPostComment: '.network-post-comment',
			networkPutBtn: '.network-put',
			networkPutComment: '.network-put-comment',
			moreInfoLinks: [
				"a[href='https://on.cypress.io/api']"
			]
		};

		// Getters for all locators
		get networkRequestsSection() { return cy.get(this.#elements.networkRequestsSection); }
		get cyRequestHeader() { return cy.get(this.#elements.cyRequestHeader); }
		get cyRequestCode() { return cy.get(this.#elements.cyRequestCode); }
		get cyInterceptHeader() { return cy.get(this.#elements.cyInterceptHeader); }
		get cyInterceptCode() { return cy.get(this.#elements.cyInterceptCode); }
		get networkBtn() { return cy.get(this.#elements.networkBtn); }
		get networkComment() { return cy.get(this.#elements.networkComment); }
		get networkPostBtn() { return cy.get(this.#elements.networkPostBtn); }
		get networkPostComment() { return cy.get(this.#elements.networkPostComment); }
		get networkPutBtn() { return cy.get(this.#elements.networkPutBtn); }
		get networkPutComment() { return cy.get(this.#elements.networkPutComment); }
		get moreInfoLinks() { return this.#elements.moreInfoLinks.map((selector: string) => cy.get(selector)); }
	
		// Interaction methods
		clickNetworkBtn() { this.networkBtn.click(); }
		clickNetworkPostBtn() { this.networkPostBtn.click(); }
		clickNetworkPutBtn() { this.networkPutBtn.click(); }
		clickMoreInfoLinks() { this.moreInfoLinks.forEach(link => link.click()); }

		// Workflow methods
		sendNetworkRequest() {
			this.clickNetworkBtn();
			this.networkComment.should('be.visible');
		}

		sendNetworkPostRequest() {
			this.clickNetworkPostBtn();
			this.networkPostComment.should('be.visible');
		}

		sendNetworkPutRequest() {
			this.clickNetworkPutBtn();
			this.networkPutComment.should('be.visible');
		}

		verifyNetworkComments() {
			this.networkComment.should('be.visible');
			this.networkPostComment.should('be.visible');
			this.networkPutComment.should('be.visible');
		}

		clickAllNetworkButtons() {
			this.clickNetworkBtn();
			this.clickNetworkPostBtn();
			this.clickNetworkPutBtn();
		}

}
