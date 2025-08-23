// Page object for https://example.cypress.io landing page
import { BasePage } from './BasePage.po';

class LandingPage extends BasePage {
				#elements = {
					banner: '.banner[data-cy="banner"]',
					bannerAlt: '.banner-alt[data-cy="banner-alt"]',
					kitchenSinkTitle: 'h1[data-cy="kitchen-sink-title"]',
					kitchenSinkDesc: '.banner p[data-cy="kitchen-sink-desc"]',
					commandsSection: '.banner-alt h2[data-cy="commands-section"]',
					commandsDesc: '.banner-alt p[data-cy="commands-desc"]',
					utilitiesSection: '.banner-alt h2[data-cy="utilities-section"]',
					utilitiesDesc: '.banner-alt p[data-cy="utilities-desc"]',
					cypressApiSection: '.banner-alt h2[data-cy="cypress-api-section"]',
					cypressApiDesc: '.banner-alt p[data-cy="cypress-api-desc"]',
					homeList: '.home-list[data-cy="home-list"]',
					queryingLink: 'a[data-cy="querying-link"]',
					traversalLink: 'a[data-cy="traversal-link"]',
					actionsLink: 'a[data-cy="actions-link"]',
					windowLink: 'a[data-cy="window-link"]',
					viewportLink: 'a[data-cy="viewport-link"]',
					locationLink: 'a[data-cy="location-link"]',
					navigationLink: 'a[data-cy="navigation-link"]',
					assertionsLink: 'a[data-cy="assertions-link"]',
					miscLink: 'a[data-cy="misc-link"]',
					connectorsLink: 'a[data-cy="connectors-link"]',
					aliasingLink: 'a[data-cy="aliasing-link"]',
					waitingLink: 'a[data-cy="waiting-link"]',
					networkRequestsLink: 'a[data-cy="network-requests-link"]',
					filesLink: 'a[data-cy="files-link"]',
					storageLink: 'a[data-cy="storage-link"]',
					cookiesLink: 'a[data-cy="cookies-link"]',
					spiesStubsClocksLink: 'a[data-cy="spies-stubs-clocks-link"]',
					utilitiesLink: 'a[data-cy="utilities-link"]',
					cypressApiLink: 'a[data-cy="cypress-api-link"]',
					githubLink: 'a[data-cy="github-link"]'
				};

		// Getters for all locators
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
	
		// Interaction methods
		clickQueryingLink() { this.queryingLink.click(); return this; }
		clickTraversalLink() { this.traversalLink.click(); return this; }
		clickActionsLink() { this.actionsLink.click(); return this; }
		clickWindowLink() { this.windowLink.click(); return this; }
		clickViewportLink() { this.viewportLink.click(); return this; }
		clickLocationLink() { this.locationLink.click(); return this; }
		clickNavigationLink() { this.navigationLink.click(); return this; }
		clickAssertionsLink() { this.assertionsLink.click(); return this; }
		clickMiscLink() { this.miscLink.click(); return this; }
		clickConnectorsLink() { this.connectorsLink.click(); return this; }
		clickAliasingLink() { this.aliasingLink.click(); return this; }
		clickWaitingLink() { this.waitingLink.click(); return this; }
		clickNetworkRequestsLink() { this.networkRequestsLink.click(); return this; }
		clickFilesLink() { this.filesLink.click(); return this; }
		clickStorageLink() { this.storageLink.click(); return this; }
		clickCookiesLink() { this.cookiesLink.click(); return this; }
		clickSpiesStubsClocksLink() { this.spiesStubsClocksLink.click(); return this; }
		clickUtilitiesLink() { this.utilitiesLink.click(); return this; }
		clickCypressApiLink() { this.cypressApiLink.click(); return this; }
		clickGithubLink() { this.githubLink.click(); return this; }

			// Workflow methods
			navigateToSection(section: string) {
				const sectionMap: Record<string, () => void> = {
					querying: () => this.clickQueryingLink(),
					traversal: () => this.clickTraversalLink(),
					actions: () => this.clickActionsLink(),
					window: () => this.clickWindowLink(),
					viewport: () => this.clickViewportLink(),
					location: () => this.clickLocationLink(),
					navigation: () => this.clickNavigationLink(),
					assertions: () => this.clickAssertionsLink(),
					misc: () => this.clickMiscLink(),
					connectors: () => this.clickConnectorsLink(),
					aliasing: () => this.clickAliasingLink(),
					waiting: () => this.clickWaitingLink(),
					networkRequests: () => this.clickNetworkRequestsLink(),
					files: () => this.clickFilesLink(),
					storage: () => this.clickStorageLink(),
					cookies: () => this.clickCookiesLink(),
					spiesStubsClocks: () => this.clickSpiesStubsClocksLink(),
					utilities: () => this.clickUtilitiesLink(),
					cypressApi: () => this.clickCypressApiLink(),
					github: () => this.clickGithubLink(),
				};
				if (sectionMap[section]) {
					sectionMap[section]();
					return this;
				} else {
					throw new Error(`Section '${section}' not found.`);
				}
			}

			// Assertion should be done in test, not here

			openKitchenSinkExample(example: string) {
				const exampleMap: Record<string, () => void> = {
					querying: () => this.clickQueryingLink(),
					traversal: () => this.clickTraversalLink(),
					actions: () => this.clickActionsLink(),
					window: () => this.clickWindowLink(),
					viewport: () => this.clickViewportLink(),
					location: () => this.clickLocationLink(),
					navigation: () => this.clickNavigationLink(),
					assertions: () => this.clickAssertionsLink(),
					misc: () => this.clickMiscLink(),
					connectors: () => this.clickConnectorsLink(),
					aliasing: () => this.clickAliasingLink(),
					waiting: () => this.clickWaitingLink(),
					networkRequests: () => this.clickNetworkRequestsLink(),
					files: () => this.clickFilesLink(),
					storage: () => this.clickStorageLink(),
					cookies: () => this.clickCookiesLink(),
					spiesStubsClocks: () => this.clickSpiesStubsClocksLink(),
					utilities: () => this.clickUtilitiesLink(),
					cypressApi: () => this.clickCypressApiLink(),
					github: () => this.clickGithubLink(),
				};
				if (exampleMap[example]) {
					exampleMap[example]();
					return this;
				} else {
					throw new Error(`Example '${example}' not found.`);
				}
			}

			// Assertion should be done in test, not here
}
