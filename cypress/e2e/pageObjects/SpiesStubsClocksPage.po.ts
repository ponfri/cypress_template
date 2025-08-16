import { BasePage } from './BasePage';

export class SpiesStubsClocksPage extends BasePage {
	constructor() {
		super('/commands/spies-stubs-clocks');
	}

	// Private element locators
	#elements = {
		clockDiv: () => cy.get('#clock-div'),
		tickDiv: () => cy.get('#tick-div'),
		spiesStubsClocksHeader: () => cy.contains('h1, h2, h3, h4', 'Spies, Stubs & Clocks'),
		cySpyCommandLink: () => cy.contains('a', 'cy.spy()'),
		cyStubCommandLink: () => cy.contains('a', 'cy.stub()'),
		cyClockCommandLink: () => cy.contains('a', 'cy.clock()'),
		cyTickCommandLink: () => cy.contains('a', 'cy.tick()'),
		additionalLinks: {
			cypressIo: () => cy.contains('a', 'cypress.io'),
			utilities: () => cy.contains('a', 'Utilities'),
			cypressApi: () => cy.contains('a', 'Cypress API'),
			github: () => cy.contains('a', 'GitHub'),
		},
	};

	// Public getters
	get clockDiv() { return this.#elements.clockDiv(); }
	get tickDiv() { return this.#elements.tickDiv(); }
	get spiesStubsClocksHeader() { return this.#elements.spiesStubsClocksHeader(); }
	get cySpyCommandLink() { return this.#elements.cySpyCommandLink(); }
	get cyStubCommandLink() { return this.#elements.cyStubCommandLink(); }
	get cyClockCommandLink() { return this.#elements.cyClockCommandLink(); }
	get cyTickCommandLink() { return this.#elements.cyTickCommandLink(); }
	get additionalLinks() { return this.#elements.additionalLinks; }

	// Interaction methods
	clickClockDiv() {
		return this.#elements.clockDiv().click();
	}
	clickTickDiv() {
		return this.#elements.tickDiv().click();
	}
	clickCySpyCommandLink() {
		return this.#elements.cySpyCommandLink().click();
	}
	clickCyStubCommandLink() {
		return this.#elements.cyStubCommandLink().click();
	}
	clickCyClockCommandLink() {
		return this.#elements.cyClockCommandLink().click();
	}
	clickCyTickCommandLink() {
		return this.#elements.cyTickCommandLink().click();
	}

	// Workflow examples
	spyOnObjectMethod(obj: object, method: string, alias: string) {
		return cy.spy(obj, method as keyof typeof obj).as(alias);
	}

	stubObjectMethod(obj: object, method: string, alias: string) {
		return cy.stub(obj, method as keyof typeof obj).as(alias);
	}

	setClockAndAssert(now: number) {
		cy.clock(now);
		this.clickClockDiv();
		this.#elements.clockDiv().should('have.text', String(now / 1000));
	}

	setTickAndAssert(now: number, tickMs: number) {
		cy.clock(now);
		this.clickTickDiv();
		this.#elements.tickDiv().should('have.text', String(now / 1000));
		cy.tick(tickMs);
		this.clickTickDiv();
		this.#elements.tickDiv().should('have.text', String((now + tickMs) / 1000));
	}
}
