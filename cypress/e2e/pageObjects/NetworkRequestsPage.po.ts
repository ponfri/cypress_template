import { BasePage } from './BasePage.po';

/**
 * Page Object for the Network Requests page in Cypress Kitchen Sink
 * Covers all workflows for cy.request(), cy.intercept(), network buttons, comment divs, code blocks, and external links
 */
export default class NetworkRequestsPage extends BasePage {

		// Private selectors for all relevant elements
			#elements = {
				networkRequestsSection: '#network-requests',
				cyRequestHeader: "h4[data-cy=\"cy-request-header\"]",
				cyRequestCode: "pre code.javascript.hljs[data-cy=\"cy-request-code\"]",
				cyInterceptHeader: "h4[data-cy=\"cy-intercept-header\"]",
				cyInterceptCode: "pre code.javascript.hljs[data-cy=\"cy-intercept-code\"]",
				networkBtn: ".network-btn[data-cy=\"network-btn\"]",
				networkComment: ".network-comment[data-cy=\"network-comment\"]",
				networkPostBtn: ".network-post[data-cy=\"network-post-btn\"]",
				networkPostComment: ".network-post-comment[data-cy=\"network-post-comment\"]",
				networkPutBtn: ".network-put[data-cy=\"network-put-btn\"]",
				networkPutComment: ".network-put-comment[data-cy=\"network-put-comment\"]",
				moreInfoLinks: [
					"a[data-cy=\"network-more-info\"]"
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
				return this;
			}

			sendNetworkPostRequest() {
				this.clickNetworkPostBtn();
				return this;
			}

			sendNetworkPutRequest() {
				this.clickNetworkPutBtn();
				return this;
			}

			verifyNetworkComments() {
				// Assertions should be done in test, not here
				return this;
			}

			clickAllNetworkButtons() {
				this.clickNetworkBtn();
				this.clickNetworkPostBtn();
				this.clickNetworkPutBtn();
				return this;
			}

}
