import { BasePage } from './BasePage.po';

/**
 * Page Object for the Waiting page in Cypress Kitchen Sink
 * Covers all workflows for waiting commands, network intercepts, input boxes, buttons, code blocks, and external links
 */
export default class WaitingPage extends BasePage {
	
	// Private selectors for all relevant elements
		#elements = {
			waitingSection: '#wait',
			cyWaitHeader: "h4:has(a[href='https://on.cypress.io/wait'])",
			cyWaitCode: "pre code.javascript.hljs",
			waitInput1: '.wait-input1',
			waitInput2: '.wait-input2',
			waitInput3: '.wait-input3',
			networkBtn: '.network-btn',
			networkComment: '.network-comment',
			moreInfoLinks: [
				"a[href='https://www.cypress.io/blog/2019/12/23/asserting-network-calls-from-cypress-tests/']",
				"a[href='https://github.com/cypress-io/cypress-example-recipes#unit-testing']",
				"a[href='https://on.cypress.io/retry-ability']"
			]
		};

		// Getters for all locators
		get waitingSection() { return cy.get(this.#elements.waitingSection); }
		get cyWaitHeader() { return cy.get(this.#elements.cyWaitHeader); }
		get cyWaitCode() { return cy.get(this.#elements.cyWaitCode); }
		get waitInput1() { return cy.get(this.#elements.waitInput1); }
		get waitInput2() { return cy.get(this.#elements.waitInput2); }
		get waitInput3() { return cy.get(this.#elements.waitInput3); }
		get networkBtn() { return cy.get(this.#elements.networkBtn); }
		get networkComment() { return cy.get(this.#elements.networkComment); }
		get moreInfoLinks() {
			return this.#elements.moreInfoLinks.map((selector) => cy.get(selector));
		}

			// Interaction methods for all locators
			clickWaitingSection() { this.waitingSection.click(); }
			clickCyWaitHeader() { this.cyWaitHeader.click(); }
			clickCyWaitCode() { this.cyWaitCode.click(); }
			typeWaitInput1(value) { this.waitInput1.clear().type(value); }
			typeWaitInput2(value) { this.waitInput2.clear().type(value); }
			typeWaitInput3(value) { this.waitInput3.clear().type(value); }
			clickNetworkBtn() { this.networkBtn.click(); }
			clickNetworkComment() { this.networkComment.click(); }
			clickMoreInfoLink(index = 0) { this.moreInfoLinks[index].click(); }

				// Workflow methods
				fillAllWaitInputs(values = ["one", "two", "three"]) {
					this.typeWaitInput1(values[0]);
					this.typeWaitInput2(values[1]);
					this.typeWaitInput3(values[2]);
				}

				clickNetworkAndValidateComment() {
					this.clickNetworkBtn();
					this.networkComment.should('be.visible');
				}

				visitAllMoreInfoLinks() {
					this.moreInfoLinks.forEach((link) => link.click());
				}

				demonstrateWaitingWorkflow(values = ["one", "two", "three"]) {
					this.clickCyWaitHeader();
					this.clickCyWaitCode();
					this.fillAllWaitInputs(values);
					this.clickNetworkAndValidateComment();
					this.visitAllMoreInfoLinks();
				}

}
