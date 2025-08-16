import { BasePage } from './BasePage';

export class UtilitiesPage extends BasePage {
	constructor() {
		super('/utilities');
	}

	// Private element locators
	#elements = {
		utilityJqueryLiFirst: () => cy.get('.utility-jquery li:first'),
		utilityBlobDiv: () => cy.get('.utility-blob'),
		utilityBlobImg: () => cy.get('.utility-blob img'),
		utilitiesHeader: () => cy.contains('h1, h2, h3, h4', 'Utilities'),
		cyLodashCommandLink: () => cy.contains('a', 'Cypress._'),
		cyJqueryCommandLink: () => cy.contains('a', 'Cypress.$'),
		cyBlobCommandLink: () => cy.contains('a', 'Cypress.Blob'),
		cyMinimatchCommandLink: () => cy.contains('a', 'Cypress.minimatch'),
		cyPromiseCommandLink: () => cy.contains('a', 'Cypress.Promise'),
		additionalLinks: {
			cypressIo: () => cy.contains('a', 'cypress.io'),
			utilities: () => cy.contains('a', 'Utilities'),
			cypressApi: () => cy.contains('a', 'Cypress API'),
			github: () => cy.contains('a', 'GitHub'),
		},
	};

	// Public getters
	get utilityJqueryLiFirst() { return this.#elements.utilityJqueryLiFirst(); }
	get utilityBlobDiv() { return this.#elements.utilityBlobDiv(); }
	get utilityBlobImg() { return this.#elements.utilityBlobImg(); }
	get utilitiesHeader() { return this.#elements.utilitiesHeader(); }
	get cyLodashCommandLink() { return this.#elements.cyLodashCommandLink(); }
	get cyJqueryCommandLink() { return this.#elements.cyJqueryCommandLink(); }
	get cyBlobCommandLink() { return this.#elements.cyBlobCommandLink(); }
	get cyMinimatchCommandLink() { return this.#elements.cyMinimatchCommandLink(); }
	get cyPromiseCommandLink() { return this.#elements.cyPromiseCommandLink(); }
	get additionalLinks() { return this.#elements.additionalLinks; }

	// Interaction methods
	clickUtilityJqueryLiFirst() {
		return this.#elements.utilityJqueryLiFirst().click();
	}
	clickUtilityBlobImg() {
		return this.#elements.utilityBlobImg().click();
	}
	clickCyLodashCommandLink() {
		return this.#elements.cyLodashCommandLink().click();
	}
	clickCyJqueryCommandLink() {
		return this.#elements.cyJqueryCommandLink().click();
	}
	clickCyBlobCommandLink() {
		return this.#elements.cyBlobCommandLink().click();
	}
	clickCyMinimatchCommandLink() {
		return this.#elements.cyMinimatchCommandLink().click();
	}
	clickCyPromiseCommandLink() {
		return this.#elements.cyPromiseCommandLink().click();
	}

	// Workflow examples
	assertLodashChain(responseBody: any) {
		const ids = Cypress._.chain(responseBody).map('id').take(3).value();
		expect(ids).to.deep.eq([1, 2, 3]);
	}

	assertJqueryLiActive() {
		let $li = Cypress.$('.utility-jquery li:first');
		cy.wrap($li).should('not.have.class', 'active');
		cy.wrap($li).click();
		cy.wrap($li).should('have.class', 'active');
	}

	assertBlobImageClick(dataUrl: string) {
		this.#elements.utilityBlobImg().should('have.attr', 'src', dataUrl);
		this.clickUtilityBlobImg();
	}

	assertMinimatchPattern(path: string, pattern: string, options: object) {
		expect(Cypress.minimatch(path, pattern, options)).to.be.true;
	}

		assertPromiseResolves(waitFn: () => Promise<any>, expected: any) {
			cy.then(() =>
				waitFn().then((result: any) => {
					expect(result).to.eq(expected);
				})
			);
	}
}
