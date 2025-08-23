import { BasePage } from './BasePage.po';

/**
 * Page Object for the Waiting page in Cypress Kitchen Sink
 * Covers all workflows for waiting commands, network intercepts, input boxes, buttons, code blocks, and external links
 */
export default class WaitingPage extends BasePage {
	
	// Private selectors for all relevant elements
			#elements = {
				waitingSection: '#wait[data-cy="waiting-section"]',
				cyWaitHeader: 'h4[data-cy="cy-wait-header"]',
				cyWaitCode: 'pre code.javascript.hljs[data-cy="cy-wait-code"]',
				waitInput1: '.wait-input1[data-cy="wait-input1"]',
				waitInput2: '.wait-input2[data-cy="wait-input2"]',
				waitInput3: '.wait-input3[data-cy="wait-input3"]',
				networkBtn: '.network-btn[data-cy="network-btn"]',
				networkComment: '.network-comment[data-cy="network-comment"]',
				moreInfoLinks: [
					"a[data-cy='more-info-link-1']",
					"a[data-cy='more-info-link-2']",
					"a[data-cy='more-info-link-3']"
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
			clickWaitingSection() { this.waitingSection.click(); return this; }
			clickCyWaitHeader() { this.cyWaitHeader.click(); return this; }
			clickCyWaitCode() { this.cyWaitCode.click(); return this; }
			typeWaitInput1(value) { this.waitInput1.clear().type(value); return this; }
			typeWaitInput2(value) { this.waitInput2.clear().type(value); return this; }
			typeWaitInput3(value) { this.waitInput3.clear().type(value); return this; }
			clickNetworkBtn() { this.networkBtn.click(); return this; }
			clickNetworkComment() { this.networkComment.click(); return this; }
			clickMoreInfoLink(index = 0) { this.moreInfoLinks[index].click(); return this; }

				// Workflow methods
					fillAllWaitInputs(values = ["one", "two", "three"]) {
						this.typeWaitInput1(values[0]);
						this.typeWaitInput2(values[1]);
						this.typeWaitInput3(values[2]);
						return this;
					}

					clickNetworkAndValidateComment() {
						this.clickNetworkBtn();
						// Assertion should be done in test, not here
						return this;
					}

					visitAllMoreInfoLinks() {
						this.moreInfoLinks.forEach((link) => link.click());
						return this;
					}

					demonstrateWaitingWorkflow(values = ["one", "two", "three"]) {
						this.clickCyWaitHeader();
						this.clickCyWaitCode();
						this.fillAllWaitInputs(values);
						this.clickNetworkAndValidateComment();
						this.visitAllMoreInfoLinks();
						return this;
					}

}
