import { BasePage } from './BasePage';

export class StoragePage extends BasePage {
	constructor() {
		super('/commands/storage');
	}

	// Private element locators
	#elements = {
		lsBtn: () => cy.get('.ls-btn'),
		storageHeader: () => cy.contains('h1, h2, h3, h4', 'Storage'),
		cyClearLocalStorageCommandLink: () => cy.contains('a', 'cy.clearLocalStorage()'),
		cyGetAllLocalStorageCommandLink: () => cy.contains('a', 'cy.getAllLocalStorage()'),
		cyClearAllLocalStorageCommandLink: () => cy.contains('a', 'cy.clearAllLocalStorage()'),
		cyGetAllSessionStorageCommandLink: () => cy.contains('a', 'cy.getAllSessionStorage()'),
		cyClearAllSessionStorageCommandLink: () => cy.contains('a', 'cy.clearAllSessionStorage()'),
		additionalLinks: {
			cypressIo: () => cy.contains('a', 'cypress.io'),
			utilities: () => cy.contains('a', 'Utilities'),
			cypressApi: () => cy.contains('a', 'Cypress API'),
			github: () => cy.contains('a', 'GitHub'),
		},
	};

	// Public getters
	get lsBtn() { return this.#elements.lsBtn(); }
	get storageHeader() { return this.#elements.storageHeader(); }
	get cyClearLocalStorageCommandLink() { return this.#elements.cyClearLocalStorageCommandLink(); }
	get cyGetAllLocalStorageCommandLink() { return this.#elements.cyGetAllLocalStorageCommandLink(); }
	get cyClearAllLocalStorageCommandLink() { return this.#elements.cyClearAllLocalStorageCommandLink(); }
	get cyGetAllSessionStorageCommandLink() { return this.#elements.cyGetAllSessionStorageCommandLink(); }
	get cyClearAllSessionStorageCommandLink() { return this.#elements.cyClearAllSessionStorageCommandLink(); }
	get additionalLinks() { return this.#elements.additionalLinks; }

	// Interaction methods
	clickLsBtn() {
		return this.#elements.lsBtn().click();
	}
	clickCyClearLocalStorageCommandLink() {
		return this.#elements.cyClearLocalStorageCommandLink().click();
	}
	clickCyGetAllLocalStorageCommandLink() {
		return this.#elements.cyGetAllLocalStorageCommandLink().click();
	}
	clickCyClearAllLocalStorageCommandLink() {
		return this.#elements.cyClearAllLocalStorageCommandLink().click();
	}
	clickCyGetAllSessionStorageCommandLink() {
		return this.#elements.cyGetAllSessionStorageCommandLink().click();
	}
	clickCyClearAllSessionStorageCommandLink() {
		return this.#elements.cyClearAllSessionStorageCommandLink().click();
	}

	// Workflow examples
	populateLocalStorage() {
		this.clickLsBtn();
		this.#elements.lsBtn().should(() => {
			expect(localStorage.getItem('prop1')).to.eq('red');
			expect(localStorage.getItem('prop2')).to.eq('blue');
			expect(localStorage.getItem('prop3')).to.eq('magenta');
		});
	}

	clearLocalStorageAndAssert() {
		cy.clearLocalStorage();
		cy.getAllLocalStorage().should(() => {
			expect(localStorage.getItem('prop1')).to.be.null;
			expect(localStorage.getItem('prop2')).to.be.null;
			expect(localStorage.getItem('prop3')).to.be.null;
		});
	}

	clearLocalStorageKeyAndAssert(key: string) {
		cy.clearLocalStorage(key);
		cy.getAllLocalStorage().should(() => {
			expect(localStorage.getItem(key)).to.be.null;
		});
	}

	clearLocalStorageRegexAndAssert(regex: RegExp) {
		cy.clearLocalStorage(regex);
		cy.getAllLocalStorage().should(() => {
			// Custom assertion for regex-matched keys
		});
	}

	getAllLocalStorageAndAssert() {
		cy.getAllLocalStorage().should((storageMap) => {
			expect(storageMap).to.deep.equal({
				'https://example.cypress.io': {
					prop1: 'red',
					prop2: 'blue',
					prop3: 'magenta',
				},
			});
		});
	}

	clearAllLocalStorageAndAssert() {
		cy.clearAllLocalStorage();
		cy.getAllLocalStorage().should(() => {
			expect(localStorage.getItem('prop1')).to.be.null;
			expect(localStorage.getItem('prop2')).to.be.null;
			expect(localStorage.getItem('prop3')).to.be.null;
		});
	}

	getAllSessionStorageAndAssert() {
		cy.getAllSessionStorage().should((storageMap) => {
			expect(storageMap).to.deep.equal({
				'https://example.cypress.io': {
					prop4: 'cyan',
					prop5: 'yellow',
					prop6: 'black',
				},
			});
		});
	}

	clearAllSessionStorageAndAssert() {
		cy.clearAllSessionStorage();
		cy.getAllSessionStorage().should(() => {
			expect(sessionStorage.getItem('prop4')).to.be.null;
			expect(sessionStorage.getItem('prop5')).to.be.null;
			expect(sessionStorage.getItem('prop6')).to.be.null;
		});
	}
}
