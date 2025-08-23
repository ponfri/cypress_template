import { BasePage } from './BasePage.po';

/**
 * Page Object for the Files page in Cypress Kitchen Sink
 * Covers all workflows for cy.fixture(), cy.readFile(), cy.writeFile(), buttons, comment divs, code blocks, and external links
 */
export default class FilesPage extends BasePage {
		// Private selectors for all relevant elements
		#elements = {
			filesSection: "h1:contains('Files')",
			cyFixtureHeader: "h4#fixture:has(a[href='https://on.cypress.io/fixture'])",
			cyFixtureCode: "pre code.javascript.hljs",
			fixtureBtn: '.fixture-btn',
			fixtureComment: '.fixture-comment',
			cyRequireHeader: "h4#require",
			cyRequireCode: "pre code.javascript.hljs",
			cyReadFileHeader: "h4#readFile:has(a[href='https://on.cypress.io/readfile'])",
			cyReadFileCode: "pre code.javascript.hljs",
			cyWriteFileHeader: "h4#writefile:has(a[href='https://on.cypress.io/writefile'])",
			cyWriteFileCode: "pre code.javascript.hljs",
			moreInfoLinks: [
				"a[href='https://on.cypress.io/api']"
			]
		};

		// Getters for all locators
		get filesSection() { return cy.get(this.#elements.filesSection); }
		get cyFixtureHeader() { return cy.get(this.#elements.cyFixtureHeader); }
		get cyFixtureCode() { return cy.get(this.#elements.cyFixtureCode); }
		get fixtureBtn() { return cy.get(this.#elements.fixtureBtn); }
		get fixtureComment() { return cy.get(this.#elements.fixtureComment); }
		get cyRequireHeader() { return cy.get(this.#elements.cyRequireHeader); }
		get cyRequireCode() { return cy.get(this.#elements.cyRequireCode); }
		get cyReadFileHeader() { return cy.get(this.#elements.cyReadFileHeader); }
		get cyReadFileCode() { return cy.get(this.#elements.cyReadFileCode); }
		get cyWriteFileHeader() { return cy.get(this.#elements.cyWriteFileHeader); }
		get cyWriteFileCode() { return cy.get(this.#elements.cyWriteFileCode); }
		get moreInfoLinks() { return this.#elements.moreInfoLinks.map((selector: string) => cy.get(selector)); }
	
		// Interaction methods
		clickFixtureBtn() { this.fixtureBtn.click(); }
		clickMoreInfoLinks() { this.moreInfoLinks.forEach(link => link.click()); }
}
