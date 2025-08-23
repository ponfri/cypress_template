import { BasePage } from './BasePage.po';

/**
 * Page Object for the Cypress API page in Cypress Kitchen Sink
 * Covers all workflows for Cypress.Commands.add, Cookies.debug, arch, config, dom.isHidden, env, log, platform, version, navbar, navigation, code blocks, headers, and external links
 */
export default class CypressAPIPage extends BasePage {
		#elements = {
			banner: '.banner',
			mainHeader: 'h1',
			docsLink: "a:contains('custom commands')",
			// Commands.add section
			commandsAddHeader: "h4#Commands.add",
			commandsAddLink: "a:contains('Commands.add')",
			commandsAddCode: "pre code.javascript.hljs",
			// Cookies.debug section
			cookiesDebugHeader: "h4#Cookies.debug",
			cookiesDebugLink: "a:contains('Cookies.debug')",
			cookiesDebugCode: "pre code.javascript.hljs",
			// arch section
			archHeader: "h4#arch",
			archLink: "a:contains('arch')",
			archCode: "pre code.javascript.hljs",
			// config section
			configHeader: "h4#config",
			configLink: "a:contains('config')",
			configCode: "pre code.javascript.hljs",
			// dom.isHidden section
			domIsHiddenHeader: "h4#dom.isHidden",
			domIsHiddenLink: "a:contains('dom.isHidden')",
			domIsHiddenCode: "pre code.javascript.hljs",
			domPHidden: '.dom-p p.hidden',
			domPVisible: '.dom-p p.visible',
			// env section
			envHeader: "h4#env",
			envLink: "a:contains('env')",
			envCode: "pre code.javascript.hljs",
			// log section
			logHeader: "h4#log",
			logLink: "a:contains('log')",
			logCode: "pre code.javascript.hljs",
			// platform section
			platformHeader: "h4#platform",
			platformLink: "a:contains('platform')",
			platformCode: "pre code.javascript.hljs",
			// version section
			versionHeader: "h4#version",
			versionLink: "a:contains('version')",
			versionCode: "pre code.javascript.hljs",
		};

		// Getters for all locators
		get banner() { return cy.get(this.#elements.banner); }
		get mainHeader() { return cy.get(this.#elements.mainHeader); }
		get docsLink() { return cy.get(this.#elements.docsLink); }
		// Commands.add section
		get commandsAddHeader() { return cy.get(this.#elements.commandsAddHeader); }
		get commandsAddLink() { return cy.get(this.#elements.commandsAddLink); }
		get commandsAddCode() { return cy.get(this.#elements.commandsAddCode); }
		// Cookies.debug section
		get cookiesDebugHeader() { return cy.get(this.#elements.cookiesDebugHeader); }
		get cookiesDebugLink() { return cy.get(this.#elements.cookiesDebugLink); }
		get cookiesDebugCode() { return cy.get(this.#elements.cookiesDebugCode); }
		// arch section
		get archHeader() { return cy.get(this.#elements.archHeader); }
		get archLink() { return cy.get(this.#elements.archLink); }
		get archCode() { return cy.get(this.#elements.archCode); }
		// config section
		get configHeader() { return cy.get(this.#elements.configHeader); }
		get configLink() { return cy.get(this.#elements.configLink); }
		get configCode() { return cy.get(this.#elements.configCode); }
		// dom.isHidden section
		get domIsHiddenHeader() { return cy.get(this.#elements.domIsHiddenHeader); }
		get domIsHiddenLink() { return cy.get(this.#elements.domIsHiddenLink); }
		get domIsHiddenCode() { return cy.get(this.#elements.domIsHiddenCode); }
		get domPHidden() { return cy.get(this.#elements.domPHidden); }
		get domPVisible() { return cy.get(this.#elements.domPVisible); }
		// env section
		get envHeader() { return cy.get(this.#elements.envHeader); }
		get envLink() { return cy.get(this.#elements.envLink); }
		get envCode() { return cy.get(this.#elements.envCode); }
		// log section
		get logHeader() { return cy.get(this.#elements.logHeader); }
		get logLink() { return cy.get(this.#elements.logLink); }
		get logCode() { return cy.get(this.#elements.logCode); }
		// platform section
		get platformHeader() { return cy.get(this.#elements.platformHeader); }
		get platformLink() { return cy.get(this.#elements.platformLink); }
		get platformCode() { return cy.get(this.#elements.platformCode); }
		// version section
		get versionHeader() { return cy.get(this.#elements.versionHeader); }
		get versionLink() { return cy.get(this.#elements.versionLink); }
		get versionCode() { return cy.get(this.#elements.versionCode); }
	
		// Interaction methods
		clickDocsLink() { this.docsLink.click(); }
		clickCommandsAddLink() { this.commandsAddLink.click(); }
		clickCookiesDebugLink() { this.cookiesDebugLink.click(); }
		clickArchLink() { this.archLink.click(); }
		clickConfigLink() { this.configLink.click(); }
		clickDomIsHiddenLink() { this.domIsHiddenLink.click(); }
		clickEnvLink() { this.envLink.click(); }
		clickLogLink() { this.logLink.click(); }
		clickPlatformLink() { this.platformLink.click(); }
		clickVersionLink() { this.versionLink.click(); }
	
		// Workflow methods
		addCustomCommandAndVerify(commandName: string, implementation: (...args: any[]) => any, testArgs: any[], expectedResult: any) {
			// Add custom command
			Cypress.Commands.add(commandName as keyof Cypress.Chainable, implementation);
			// Invoke the custom command and verify expected behavior
			cy[commandName](...testArgs).then((result: any) => {
				expect(result).to.deep.equal(expectedResult);
			});
		}
	
		debugCookiesWorkflow() {
			this.clickCookiesDebugLink();
			cy.get('.command-log').should('contain', 'Cookies.debug');
		}
	
		checkArchConfigPlatformVersion() {
			this.archHeader.should('exist');
			this.configHeader.should('exist');
			this.platformHeader.should('exist');
			this.versionHeader.should('exist');
		}
	
		verifyDomIsHiddenAndVisible() {
			this.domPHidden.should('have.class', 'hidden');
			this.domPVisible.should('have.class', 'visible');
		}
	
		logEnvWorkflow() {
			this.clickEnvLink();
			cy.get('.command-log').should('contain', 'env');
		}
}
