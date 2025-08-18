import { BasePage } from './BasePage.po';

/**
 * Page Object for the Viewport page in Cypress Kitchen Sink
 * Covers all workflows for viewport commands, navbar, toggle, and navigation links
 */
export default class ViewportPage extends BasePage {
	// Private selectors for all relevant elements
	#elements = {
		viewportSection: '#viewport',
		cyViewportHeader: "h4:has(a[href='https://on.cypress.io/viewport'])",
		cyViewportCode: "pre code.javascript.hljs",
	};

	// Getters for elements
	// ...menu and navigation handled by BasePage...
	getViewportSection() {
		return cy.get(this.#elements.viewportSection);
	}
	getCyViewportHeader() {
		return cy.get(this.#elements.cyViewportHeader);
	}
	getCyViewportCode() {
		return cy.get(this.#elements.cyViewportCode);
	}

	// Workflow methods
	// ...menu and navigation handled by BasePage...

	/**
	 * Set viewport to custom width and height
	 * @param width number
	 * @param height number
	 */
	setViewportSize(width: number, height: number) {
		cy.viewport(width, height);
	}

	/**
	 * Set viewport to a preset device
	 * @param preset string (e.g. 'macbook-15', 'ipad-2', 'iphone-6+')
	 * @param orientation string ('portrait' | 'landscape')
	 */
		setViewportPreset(preset: Cypress.ViewportPreset, orientation?: Cypress.ViewportOrientation) {
			if (orientation) {
				cy.viewport(preset, orientation);
			} else {
				cy.viewport(preset);
			}
		}

	/**
	 * Wait for a given ms (used between viewport changes)
	 */
	wait(ms: number) {
		cy.wait(ms);
	}

	// Full workflow for all viewport examples
	runAllViewportWorkflows() {
	// Set to small viewport
	this.setViewportSize(320, 480);
	// Set to large viewport
	this.setViewportSize(2999, 2999);
		// Preset devices
			const presets: Cypress.ViewportPreset[] = [
				'macbook-15', 'macbook-13', 'macbook-11',
				'ipad-2', 'ipad-mini', 'iphone-6+', 'iphone-6',
				'iphone-5', 'iphone-4', 'iphone-3'
			];
			presets.forEach((preset: Cypress.ViewportPreset) => {
				this.setViewportPreset(preset);
				this.wait(200);
			});
		// Orientation examples
		this.setViewportPreset('ipad-2', 'portrait');
		this.wait(200);
		this.setViewportPreset('iphone-4', 'landscape');
		this.wait(200);
	}

	// Assertion for cy.viewport() header and code block
	assertCyViewportHeaderVisible() {
		this.getCyViewportHeader().should('be.visible');
	}
	assertCyViewportCodeVisible() {
		this.getCyViewportCode().should('be.visible');
	}
}
