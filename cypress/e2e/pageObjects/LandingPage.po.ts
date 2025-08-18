// Page object for https://example.cypress.io landing page
import { BasePage } from './BasePage.po';

class LandingPage extends BasePage {
	#elements = {
		navbar: '#navbar',
		navbarContainer: '.navbar',
		navbarHeader: '.navbar-header',
		navbarToggle: '.navbar-toggle',
		navBrand: '.navbar-brand',
		navCommands: '.dropdown-toggle',
		navUtilities: '.nav.navbar-nav a[href="/utilities"]',
		navCypressApi: '.nav.navbar-nav a[href="/cypress-api"]',
		navGitHub: '.nav.navbar-nav.pull-right a',
		banner: '.banner',
		bannerAlt: '.banner-alt',
		kitchenSinkTitle: 'h1',
		kitchenSinkDesc: '.banner p',
		commandsSection: '.banner-alt h2',
		commandsDesc: '.banner-alt p',
		utilitiesSection: '.banner-alt h2',
		utilitiesDesc: '.banner-alt p',
		cypressApiSection: '.banner-alt h2',
		cypressApiDesc: '.banner-alt p',
		homeList: '.home-list',
		queryingLink: 'a[href="/commands/querying"]',
		traversalLink: 'a[href="/commands/traversal"]',
		actionsLink: 'a[href="/commands/actions"]',
		windowLink: 'a[href="/commands/window"]',
		viewportLink: 'a[href="/commands/viewport"]',
		locationLink: 'a[href="/commands/location"]',
		navigationLink: 'a[href="/commands/navigation"]',
		assertionsLink: 'a[href="/commands/assertions"]',
		miscLink: 'a[href="/commands/misc"]',
		connectorsLink: 'a[href="/commands/connectors"]',
		aliasingLink: 'a[href="/commands/aliasing"]',
		waitingLink: 'a[href="/commands/waiting"]',
		networkRequestsLink: 'a[href="/commands/network-requests"]',
		filesLink: 'a[href="/commands/files"]',
		storageLink: 'a[href="/commands/storage"]',
		cookiesLink: 'a[href="/commands/cookies"]',
		spiesStubsClocksLink: 'a[href="/commands/spies-stubs-clocks"]',
		utilitiesLink: 'a[href="/utilities"]',
		cypressApiLink: 'a[href="/cypress-api"]',
		githubLink: 'a[href*="github.com/cypress-io/cypress-example-kitchensink"]',
		// Add more selectors as needed for all elements
	};

	constructor() {
		super('/');
	}

	// Getters for elements
	get navbar() { return cy.get(this.#elements.navbar); }
	get navbarContainer() { return cy.get(this.#elements.navbarContainer); }
	get navbarHeader() { return cy.get(this.#elements.navbarHeader); }
	get navbarToggle() { return cy.get(this.#elements.navbarToggle); }
	get navBrand() { return cy.get(this.#elements.navBrand); }
	get navCommands() { return cy.get(this.#elements.navCommands); }
	get navUtilities() { return cy.get(this.#elements.navUtilities); }
	get navCypressApi() { return cy.get(this.#elements.navCypressApi); }
	get navGitHub() { return cy.get(this.#elements.navGitHub); }
	get banner() { return cy.get(this.#elements.banner); }
	get bannerAlt() { return cy.get(this.#elements.bannerAlt); }
	get kitchenSinkTitle() { return cy.get(this.#elements.kitchenSinkTitle); }
	get kitchenSinkDesc() { return cy.get(this.#elements.kitchenSinkDesc); }
	get commandsSection() { return cy.get(this.#elements.commandsSection); }
	get commandsDesc() { return cy.get(this.#elements.commandsDesc); }
	get utilitiesSection() { return cy.get(this.#elements.utilitiesSection); }
	get utilitiesDesc() { return cy.get(this.#elements.utilitiesDesc); }
	get cypressApiSection() { return cy.get(this.#elements.cypressApiSection); }
	get cypressApiDesc() { return cy.get(this.#elements.cypressApiDesc); }
	get homeList() { return cy.get(this.#elements.homeList); }
	get queryingLink() { return cy.get(this.#elements.queryingLink); }
	get traversalLink() { return cy.get(this.#elements.traversalLink); }
	get actionsLink() { return cy.get(this.#elements.actionsLink); }
	get windowLink() { return cy.get(this.#elements.windowLink); }
	get viewportLink() { return cy.get(this.#elements.viewportLink); }
	get locationLink() { return cy.get(this.#elements.locationLink); }
	get navigationLink() { return cy.get(this.#elements.navigationLink); }
	get assertionsLink() { return cy.get(this.#elements.assertionsLink); }
	get miscLink() { return cy.get(this.#elements.miscLink); }
	get connectorsLink() { return cy.get(this.#elements.connectorsLink); }
	get aliasingLink() { return cy.get(this.#elements.aliasingLink); }
	get waitingLink() { return cy.get(this.#elements.waitingLink); }
	get networkRequestsLink() { return cy.get(this.#elements.networkRequestsLink); }
	get filesLink() { return cy.get(this.#elements.filesLink); }
	get storageLink() { return cy.get(this.#elements.storageLink); }
	get cookiesLink() { return cy.get(this.#elements.cookiesLink); }
	get spiesStubsClocksLink() { return cy.get(this.#elements.spiesStubsClocksLink); }
	get utilitiesLink() { return cy.get(this.#elements.utilitiesLink); }
	get cypressApiLink() { return cy.get(this.#elements.cypressApiLink); }
	get githubLink() { return cy.get(this.#elements.githubLink); }

	// Workflow methods for page-specific elements and all links
	clickBanner() { return this.banner.first().click({ force: true }); }
	clickBannerAlt() { return this.bannerAlt.first().click({ force: true }); }
	clickQueryingLink() { return this.queryingLink.first().click({ force: true }); }
	clickTraversalLink() { return this.traversalLink.first().click({ force: true }); }
	clickActionsLink() { return this.actionsLink.first().click({ force: true }); }
	clickWindowLink() { return this.windowLink.first().click({ force: true }); }
	clickViewportLink() { return this.viewportLink.first().click({ force: true }); }
	clickLocationLink() { return this.locationLink.first().click({ force: true }); }
	clickNavigationLink() { return this.navigationLink.first().click({ force: true }); }
	clickAssertionsLink() { return this.assertionsLink.first().click({ force: true }); }
	clickMiscLink() { return this.miscLink.first().click({ force: true }); }
	clickConnectorsLink() { return this.connectorsLink.first().click({ force: true }); }
	clickAliasingLink() { return this.aliasingLink.first().click({ force: true }); }
	clickWaitingLink() { return this.waitingLink.first().click({ force: true }); }
	clickNetworkRequestsLink() { return this.networkRequestsLink.first().click({ force: true }); }
	clickFilesLink() { return this.filesLink.first().click({ force: true }); }
	clickStorageLink() { return this.storageLink.first().click({ force: true }); }
	clickCookiesLink() { return this.cookiesLink.first().click({ force: true }); }
	clickSpiesStubsClocksLink() { return this.spiesStubsClocksLink.first().click({ force: true }); }
	clickUtilitiesLink() { return this.utilitiesLink.first().click({ force: true }); }
	clickCypressApiLink() { return this.cypressApiLink.first().click({ force: true }); }
	clickGithubLink() { return this.githubLink.first().click({ force: true }); }

	getText(selector: string) {
		return cy.get(this.#elements[selector]).invoke('text');
	}

	getCss(selector: string, cssProp: string) {
		return cy.get(this.#elements[selector]).invoke('css', cssProp);
	}

	isVisible(selector: string) {
		return cy.get(this.#elements[selector]).should('be.visible');
	}

	isEnabled(selector: string) {
		return cy.get(this.#elements[selector]).should('not.be.disabled');
	}

	/**
	 * Types a value into an input element.
	 */
	typeInput(selector: string, value: string) {
		return cy.get(this.#elements[selector]).type(value);
	}

	/**
	 * Clears an input element.
	 */
	clearInput(selector: string) {
		return cy.get(this.#elements[selector]).clear();
	}

	/**
	 * Checks a checkbox or radio element.
	 */
	check(selector: string) {
		return cy.get(this.#elements[selector]).check();
	}

	/**
	 * Unchecks a checkbox element.
	 */
	uncheck(selector: string) {
		return cy.get(this.#elements[selector]).uncheck();
	}

	/**
	 * Selects an option in a select element.
	 */
	selectOption(selector: string, value: string) {
		return cy.get(this.#elements[selector]).select(value);
	}

	// Add more workflow methods as needed
}

export default LandingPage;
