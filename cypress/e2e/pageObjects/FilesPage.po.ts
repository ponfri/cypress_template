import { BasePage } from './BasePage.po';

/**
 * Page Object for the Files page in Cypress Kitchen Sink
 * Covers all workflows for cy.fixture(), cy.readFile(), cy.writeFile(), buttons, comment divs, code blocks, and external links
 */
export default class FilesPage extends BasePage {
		// Private selectors for all relevant elements
			#elements = {
				filesSection: "h1[data-cy=\"files-section\"]",
				cyFixtureHeader: "h4#fixture[data-cy=\"cy-fixture-header\"]",
				cyFixtureCode: "pre code.javascript.hljs[data-cy=\"cy-fixture-code\"]",
				fixtureBtn: ".fixture-btn[data-cy=\"fixture-btn\"]",
				fixtureComment: ".fixture-comment[data-cy=\"fixture-comment\"]",
				cyRequireHeader: "h4#require[data-cy=\"cy-require-header\"]",
				cyRequireCode: "pre code.javascript.hljs[data-cy=\"cy-require-code\"]",
				cyReadFileHeader: "h4#readFile[data-cy=\"cy-readfile-header\"]",
				cyReadFileCode: "pre code.javascript.hljs[data-cy=\"cy-readfile-code\"]",
				cyWriteFileHeader: "h4#writefile[data-cy=\"cy-writefile-header\"]",
				cyWriteFileCode: "pre code.javascript.hljs[data-cy=\"cy-writefile-code\"]",
				moreInfoLinks: [
					"a[data-cy=\"files-more-info\"]"
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
