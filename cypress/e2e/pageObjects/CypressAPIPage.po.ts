import { BasePage } from './BasePage.po';

/**
 * Page Object for the Cypress API page in Cypress Kitchen Sink
 * Covers all workflows for Cypress.Commands.add, Cookies.debug, arch, config, dom.isHidden, env, log, platform, version, navbar, navigation, code blocks, headers, and external links
 */
export default class CypressAPIPage extends BasePage {
				#elements = {
					banner: '.banner[data-cy="banner"]',
					mainHeader: 'h1[data-cy="main-header"]',
					docsLink: "a[data-cy='docs-custom-commands']",
					commandsAddHeader: "h4#Commands.add[data-cy='commands-add-header']",
					commandsAddLink: "a[data-cy='commands-add']",
					commandsAddCode: "pre code.javascript.hljs[data-cy='commands-add-code']",
					cookiesDebugHeader: "h4#Cookies.debug[data-cy='cookies-debug-header']",
					cookiesDebugLink: "a[data-cy='cookies-debug']",
					cookiesDebugCode: "pre code.javascript.hljs[data-cy='cookies-debug-code']",
					archHeader: "h4#arch[data-cy='arch-header']",
					archLink: "a[data-cy='arch']",
					archCode: "pre code.javascript.hljs[data-cy='arch-code']",
					configHeader: "h4#config[data-cy='config-header']",
					configLink: "a[data-cy='config']",
					configCode: "pre code.javascript.hljs[data-cy='config-code']",
					domIsHiddenHeader: "h4#dom.isHidden[data-cy='dom-is-hidden-header']",
					domIsHiddenLink: "a[data-cy='dom-is-hidden']",
					domIsHiddenCode: "pre code.javascript.hljs[data-cy='dom-is-hidden-code']",
					domPHidden: '.dom-p p.hidden[data-cy="dom-p-hidden"]',
					domPVisible: '.dom-p p.visible[data-cy="dom-p-visible"]',
					envHeader: "h4#env[data-cy='env-header']",
					envLink: "a[data-cy='env']",
					envCode: "pre code.javascript.hljs[data-cy='env-code']",
					logHeader: "h4#log[data-cy='log-header']",
					logLink: "a[data-cy='log']",
					logCode: "pre code.javascript.hljs[data-cy='log-code']",
					platformHeader: "h4#platform[data-cy='platform-header']",
					platformLink: "a[data-cy='platform']",
					platformCode: "pre code.javascript.hljs[data-cy='platform-code']",
					versionHeader: "h4#version[data-cy='version-header']",
					versionLink: "a[data-cy='version']",
					versionCode: "pre code.javascript.hljs[data-cy='version-code']",
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
		clickDocsLink() { this.docsLink.click(); return this; }
		clickCommandsAddLink() { this.commandsAddLink.click(); return this; }
		clickCookiesDebugLink() { this.cookiesDebugLink.click(); return this; }
		clickArchLink() { this.archLink.click(); return this; }
		clickConfigLink() { this.configLink.click(); return this; }
		clickDomIsHiddenLink() { this.domIsHiddenLink.click(); return this; }
		clickEnvLink() { this.envLink.click(); return this; }
		clickLogLink() { this.logLink.click(); return this; }
		clickPlatformLink() { this.platformLink.click(); return this; }
		clickVersionLink() { this.versionLink.click(); return this; }
	
			// Workflow methods (no assertions, chainable)
			addCustomCommand(commandName: string, implementation: (...args: any[]) => any) {
				Cypress.Commands.add(commandName as keyof Cypress.Chainable, implementation);
				return this;
			}

			debugCookiesWorkflow() {
				this.clickCookiesDebugLink();
				return this;
			}

			checkArchConfigPlatformVersion() {
				this.clickArchLink();
				this.clickConfigLink();
				this.clickPlatformLink();
				this.clickVersionLink();
				return this;
			}

			showDomIsHiddenAndVisible() {
				this.clickDomIsHiddenLink();
				return this;
			}

			logEnvWorkflow() {
				this.clickEnvLink();
				return this;
			}
}
