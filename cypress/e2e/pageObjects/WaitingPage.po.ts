import { BasePage } from './BasePage.po';

/**
 * Page Object for the Waiting page in Cypress Kitchen Sink
 * Covers all workflows for waiting commands, network intercepts, input boxes, buttons, code blocks, and external links
 */
export default class WaitingPage extends BasePage {
	getWaitingSection() {
		return cy.get(this.#elements.waitingSection);
	}
	getCyWaitHeader() {
		return cy.get(this.#elements.cyWaitHeader);
	}
	getCyWaitCode() {
		return cy.get(this.#elements.cyWaitCode);
	}
	getWaitInput1() {
		return cy.get(this.#elements.waitInput1);
	}
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

	// Getters for elements
	// ...existing code...
	// ...existing code...
	// ...existing code...
	getWaitInput2() {
		return cy.get(this.#elements.waitInput2);
	}
	getWaitInput3() {
		return cy.get(this.#elements.waitInput3);
	}
	getNetworkBtn() {
		return cy.get(this.#elements.networkBtn);
	}
	getNetworkComment() {
		return cy.get(this.#elements.networkComment);
	}
	getMoreInfoLinks() {
		return this.#elements.moreInfoLinks.map(sel => cy.get(sel));
	}

	// Workflow methods
	// ...existing code...

	assertWaitingSectionVisible() {
		this.getWaitingSection().should('be.visible');
	}
	assertCyWaitHeaderVisible() {
		this.getCyWaitHeader().should('be.visible');
	}
	assertCyWaitCodeVisible() {
		this.getCyWaitCode().should('be.visible');
	}

	typeWaitInput1(text: string) {
		this.getWaitInput1().clear().type(text);
	}
	typeWaitInput2(text: string) {
		this.getWaitInput2().clear().type(text);
	}
	typeWaitInput3(text: string) {
		this.getWaitInput3().clear().type(text);
	}

	clickNetworkBtn() {
		this.getNetworkBtn().should('be.visible').click();
	}
	assertNetworkCommentVisible() {
		this.getNetworkComment().should('be.visible');
	}

	clickMoreInfoLinks() {
		this.getMoreInfoLinks().forEach(link => link.should('be.visible').click({ multiple: true }));
	}

	// Full workflow for all waiting examples
	runAllWaitingWorkflows() {
	// ...existing code...
		this.assertWaitingSectionVisible();
		this.assertCyWaitHeaderVisible();
		this.assertCyWaitCodeVisible();
		this.typeWaitInput1('Wait 1000ms after typing');
		cy.wait(1000);
		this.typeWaitInput2('Wait 1000ms after typing');
		cy.wait(1000);
		this.typeWaitInput3('Wait 1000ms after typing');
		cy.wait(1000);
		cy.intercept('GET', '**/comments/*').as('getComment');
		this.clickNetworkBtn();
		cy.wait('@getComment').its('response.statusCode').should('be.oneOf', [200, 304]);
		this.assertNetworkCommentVisible();
		this.clickMoreInfoLinks();
	}
}
