// Page object for https://example.cypress.io landing page
import { BasePage } from './BasePage.po';

class LandingPage extends BasePage {
			#elements = {
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
				githubLink: 'a[href*="github.com/cypress-io/cypress-example-kitchensink"]'
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
		clickQueryingLink() { this.queryingLink.click(); }
		clickTraversalLink() { this.traversalLink.click(); }
		clickActionsLink() { this.actionsLink.click(); }
		clickWindowLink() { this.windowLink.click(); }
		clickViewportLink() { this.viewportLink.click(); }
		clickLocationLink() { this.locationLink.click(); }
		clickNavigationLink() { this.navigationLink.click(); }
		clickAssertionsLink() { this.assertionsLink.click(); }
		clickMiscLink() { this.miscLink.click(); }
		clickConnectorsLink() { this.connectorsLink.click(); }
		clickAliasingLink() { this.aliasingLink.click(); }
		clickWaitingLink() { this.waitingLink.click(); }
		clickNetworkRequestsLink() { this.networkRequestsLink.click(); }
		clickFilesLink() { this.filesLink.click(); }
		clickStorageLink() { this.storageLink.click(); }
		clickCookiesLink() { this.cookiesLink.click(); }
		clickSpiesStubsClocksLink() { this.spiesStubsClocksLink.click(); }
		clickUtilitiesLink() { this.utilitiesLink.click(); }
		clickCypressApiLink() { this.cypressApiLink.click(); }
		clickGithubLink() { this.githubLink.click(); }

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
			} else {
				throw new Error(`Section '${section}' not found.`);
			}
		}

		verifyBannerContent() {
			this.banner.should('be.visible');
			this.kitchenSinkTitle.should('contain.text', 'Kitchen Sink');
			this.kitchenSinkDesc.should('be.visible');
		}

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
			} else {
				throw new Error(`Example '${example}' not found.`);
			}
		}

		verifyAllMainLinksVisible() {
			this.queryingLink.should('be.visible');
			this.traversalLink.should('be.visible');
			this.actionsLink.should('be.visible');
			this.windowLink.should('be.visible');
			this.viewportLink.should('be.visible');
			this.locationLink.should('be.visible');
			this.navigationLink.should('be.visible');
			this.assertionsLink.should('be.visible');
			this.miscLink.should('be.visible');
			this.connectorsLink.should('be.visible');
			this.aliasingLink.should('be.visible');
			this.waitingLink.should('be.visible');
			this.networkRequestsLink.should('be.visible');
			this.filesLink.should('be.visible');
			this.storageLink.should('be.visible');
			this.cookiesLink.should('be.visible');
			this.spiesStubsClocksLink.should('be.visible');
			this.utilitiesLink.should('be.visible');
			this.cypressApiLink.should('be.visible');
			this.githubLink.should('be.visible');
		}
}
