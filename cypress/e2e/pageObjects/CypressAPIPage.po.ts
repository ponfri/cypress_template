import { BasePage } from './BasePage.po';

/**
 * Page Object for the Cypress API page in Cypress Kitchen Sink
 * Covers all workflows for Cypress.Commands.add, Cookies.debug, arch, config, dom.isHidden, env, log, platform, version, navbar, navigation, code blocks, headers, and external links
 */
export default class CypressAPIPage extends BasePage {
	#elements = {
		banner: '.banner',
		mainHeader: 'h1',
		docsLink: "a[href='https://on.cypress.io/custom-commands']",
		// Commands.add section
		commandsAddHeader: "h4#Commands\\.add",
		commandsAddLink: "a[href='https://on.cypress.io/custom-commands']",
		commandsAddCode: "pre code.javascript.hljs",
		// Cookies.debug section
		cookiesDebugHeader: "h4#Cookies\\.debug",
		cookiesDebugLink: "a[href='https://on.cypress.io/cookies']",
		cookiesDebugCode: "pre code.javascript.hljs",
		// arch section
		archHeader: "h4#arch",
		archLink: "a[href='https://on.cypress.io/arch']",
		archCode: "pre code.javascript.hljs",
		// config section
		configHeader: "h4#config",
		configLink: "a[href='https://on.cypress.io/config']",
		configCode: "pre code.javascript.hljs",
		// dom.isHidden section
		domIsHiddenHeader: "h4#dom\\.isHidden",
		domIsHiddenLink: "a[href='https://on.cypress.io/dom']",
		domIsHiddenCode: "pre code.javascript.hljs",
		domPHidden: '.dom-p p.hidden',
		domPVisible: '.dom-p p.visible',
		// env section
		envHeader: "h4#env",
		envLink: "a[href='https://on.cypress.io/env']",
		envCode: "pre code.javascript.hljs",
		// log section
		logHeader: "h4#log",
		logLink: "a[href='https://on.cypress.io/cypress-log']",
		logCode: "pre code.javascript.hljs",
		// platform section
		platformHeader: "h4#platform",
		platformLink: "a[href='https://on.cypress.io/platform']",
		platformCode: "pre code.javascript.hljs",
		// version section
		versionHeader: "h4#version",
		versionLink: "a[href='https://on.cypress.io/version']",
		versionCode: "pre code.javascript.hljs",
	};

	// Getters for elements
		getBanner() { return cy.get(this.#elements.banner); }
		getMainHeader() { return cy.get(this.#elements.mainHeader); }
		getDocsLink() { return cy.get(this.#elements.docsLink); }

	getCommandsAddHeader() { return cy.get(this.#elements.commandsAddHeader); }
	getCommandsAddLink() { return cy.get(this.#elements.commandsAddLink); }
	getCommandsAddCode() { return cy.get(this.#elements.commandsAddCode).eq(0); }

	getCookiesDebugHeader() { return cy.get(this.#elements.cookiesDebugHeader); }
	getCookiesDebugLink() { return cy.get(this.#elements.cookiesDebugLink); }
	getCookiesDebugCode() { return cy.get(this.#elements.cookiesDebugCode).eq(1); }

	getArchHeader() { return cy.get(this.#elements.archHeader); }
	getArchLink() { return cy.get(this.#elements.archLink); }
	getArchCode() { return cy.get(this.#elements.archCode).eq(2); }

	getConfigHeader() { return cy.get(this.#elements.configHeader); }
	getConfigLink() { return cy.get(this.#elements.configLink); }
	getConfigCode() { return cy.get(this.#elements.configCode).eq(3); }

	getDomIsHiddenHeader() { return cy.get(this.#elements.domIsHiddenHeader); }
	getDomIsHiddenLink() { return cy.get(this.#elements.domIsHiddenLink); }
	getDomIsHiddenCode() { return cy.get(this.#elements.domIsHiddenCode).eq(4); }
	getDomPHidden() { return cy.get(this.#elements.domPHidden); }
	getDomPVisible() { return cy.get(this.#elements.domPVisible); }

	getEnvHeader() { return cy.get(this.#elements.envHeader); }
	getEnvLink() { return cy.get(this.#elements.envLink); }
	getEnvCode() { return cy.get(this.#elements.envCode).eq(5); }

	getLogHeader() { return cy.get(this.#elements.logHeader); }
	getLogLink() { return cy.get(this.#elements.logLink); }
	getLogCode() { return cy.get(this.#elements.logCode).eq(6); }

	getPlatformHeader() { return cy.get(this.#elements.platformHeader); }
	getPlatformLink() { return cy.get(this.#elements.platformLink); }
	getPlatformCode() { return cy.get(this.#elements.platformCode).eq(7); }

	getVersionHeader() { return cy.get(this.#elements.versionHeader); }
	getVersionLink() { return cy.get(this.#elements.versionLink); }
	getVersionCode() { return cy.get(this.#elements.versionCode).eq(8); }

	// Workflow methods
		// ...menu and navigation handled by BasePage...

	assertBannerVisible() { this.getBanner().should('be.visible'); }
	assertMainHeaderVisible() { this.getMainHeader().should('be.visible').and('contain', 'Cypress API'); }
	assertDocsLinkVisible() { this.getDocsLink().should('be.visible'); }
	clickDocsLink() { this.getDocsLink().should('be.visible').invoke('removeAttr', 'target').click(); }

	// Commands.add workflows
	assertCommandsAddHeaderVisible() { this.getCommandsAddHeader().should('be.visible'); }
	assertCommandsAddLinkVisible() { this.getCommandsAddLink().should('be.visible'); }
	clickCommandsAddLink() { this.getCommandsAddLink().should('be.visible').invoke('removeAttr', 'target').click(); }
	assertCommandsAddCodeVisible() { this.getCommandsAddCode().should('be.visible'); }

	// Cookies.debug workflows
	assertCookiesDebugHeaderVisible() { this.getCookiesDebugHeader().should('be.visible'); }
	assertCookiesDebugLinkVisible() { this.getCookiesDebugLink().should('be.visible'); }
	clickCookiesDebugLink() { this.getCookiesDebugLink().should('be.visible').invoke('removeAttr', 'target').click(); }
	assertCookiesDebugCodeVisible() { this.getCookiesDebugCode().should('be.visible'); }

	// arch workflows
	assertArchHeaderVisible() { this.getArchHeader().should('be.visible'); }
	assertArchLinkVisible() { this.getArchLink().should('be.visible'); }
	clickArchLink() { this.getArchLink().should('be.visible').invoke('removeAttr', 'target').click(); }
	assertArchCodeVisible() { this.getArchCode().should('be.visible'); }

	// config workflows
	assertConfigHeaderVisible() { this.getConfigHeader().should('be.visible'); }
	assertConfigLinkVisible() { this.getConfigLink().should('be.visible'); }
	clickConfigLink() { this.getConfigLink().should('be.visible').invoke('removeAttr', 'target').click(); }
	assertConfigCodeVisible() { this.getConfigCode().should('be.visible'); }

	// dom.isHidden workflows
	assertDomIsHiddenHeaderVisible() { this.getDomIsHiddenHeader().should('be.visible'); }
	assertDomIsHiddenLinkVisible() { this.getDomIsHiddenLink().should('be.visible'); }
	clickDomIsHiddenLink() { this.getDomIsHiddenLink().should('be.visible').invoke('removeAttr', 'target').click(); }
	assertDomIsHiddenCodeVisible() { this.getDomIsHiddenCode().should('be.visible'); }
	assertDomPHiddenVisible() { this.getDomPHidden().should('be.visible'); }
	assertDomPVisibleVisible() { this.getDomPVisible().should('be.visible'); }

	// env workflows
	assertEnvHeaderVisible() { this.getEnvHeader().should('be.visible'); }
	assertEnvLinkVisible() { this.getEnvLink().should('be.visible'); }
	clickEnvLink() { this.getEnvLink().should('be.visible').invoke('removeAttr', 'target').click(); }
	assertEnvCodeVisible() { this.getEnvCode().should('be.visible'); }

	// log workflows
	assertLogHeaderVisible() { this.getLogHeader().should('be.visible'); }
	assertLogLinkVisible() { this.getLogLink().should('be.visible'); }
	clickLogLink() { this.getLogLink().should('be.visible').invoke('removeAttr', 'target').click(); }
	assertLogCodeVisible() { this.getLogCode().should('be.visible'); }

	// platform workflows
	assertPlatformHeaderVisible() { this.getPlatformHeader().should('be.visible'); }
	assertPlatformLinkVisible() { this.getPlatformLink().should('be.visible'); }
	clickPlatformLink() { this.getPlatformLink().should('be.visible').invoke('removeAttr', 'target').click(); }
	assertPlatformCodeVisible() { this.getPlatformCode().should('be.visible'); }

	// version workflows
	assertVersionHeaderVisible() { this.getVersionHeader().should('be.visible'); }
	assertVersionLinkVisible() { this.getVersionLink().should('be.visible'); }
	clickVersionLink() { this.getVersionLink().should('be.visible').invoke('removeAttr', 'target').click(); }
	assertVersionCodeVisible() { this.getVersionCode().should('be.visible'); }

	// Full workflow for all Cypress API examples
	runAllCypressAPIWorkflows() {
		// Banner and header
		this.assertBannerVisible();
		this.assertMainHeaderVisible();
		// Docs link
		this.assertDocsLinkVisible();
		// Commands.add section
		this.assertCommandsAddHeaderVisible();
		this.assertCommandsAddLinkVisible();
		this.assertCommandsAddCodeVisible();
		// Cookies.debug section
		this.assertCookiesDebugHeaderVisible();
		this.assertCookiesDebugLinkVisible();
		this.assertCookiesDebugCodeVisible();
		// arch section
		this.assertArchHeaderVisible();
		this.assertArchLinkVisible();
		this.assertArchCodeVisible();
		// config section
		this.assertConfigHeaderVisible();
		this.assertConfigLinkVisible();
		this.assertConfigCodeVisible();
		// dom.isHidden section
		this.assertDomIsHiddenHeaderVisible();
		this.assertDomIsHiddenLinkVisible();
		this.assertDomIsHiddenCodeVisible();
		this.assertDomPHiddenVisible();
		this.assertDomPVisibleVisible();
		// env section
		this.assertEnvHeaderVisible();
		this.assertEnvLinkVisible();
		this.assertEnvCodeVisible();
		// log section
		this.assertLogHeaderVisible();
		this.assertLogLinkVisible();
		this.assertLogCodeVisible();
		// platform section
		this.assertPlatformHeaderVisible();
		this.assertPlatformLinkVisible();
		this.assertPlatformCodeVisible();
		// version section
		this.assertVersionHeaderVisible();
		this.assertVersionLinkVisible();
		this.assertVersionCodeVisible();
	}
}
