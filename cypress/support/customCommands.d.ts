/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    /**
     * Scrolls the page just below the visible fold (viewport).
     * @param duration Optional scroll animation duration in milliseconds. Default is 1200.
     * @returns Chainable<void>
     * @example cy.scrollBelowFold() // uses default duration
     * @example cy.scrollBelowFold(500) // uses custom duration
     */
    scrollBelowFold(duration?: number): Chainable<void>;

    /**
     * Scrolls to the end (bottom) of the page.
     * @param duration Optional scroll animation duration in milliseconds. Default is 1200.
     * @returns Chainable<void>
     * @example cy.scrollToEnd() // uses default duration
     * @example cy.scrollToEnd(500) // uses custom duration
     */
    scrollToEnd(duration?: number): Chainable<void>;

    /**
     * Scrolls to the top of the page.
     * @param duration Optional scroll animation duration in milliseconds. Default is 1200.
     * @returns Chainable<void>
     * @example cy.scrollToTop() // uses default duration
     * @example cy.scrollToTop(500) // uses custom duration
     */
    scrollToTop(duration?: number): Chainable<void>;
    
    /**
     * Waits for the page to be fully loaded, all images to be loaded, and (if Angular is present) for the app to be stable.
     * Checks document readiness, image loading, and optionally Angular stability.
     * @returns Chainable<void>
     * @example cy.waitForPageReady()
     */
    waitForPageReady(): Chainable<void>;

    /**
     * Makes an API request and returns the response payload.
     * @param method HTTP method (e.g., 'GET', 'POST')
     * @param url API endpoint URL
     * @param options Optional cy.request options (body, headers, etc.)
     * @returns Chainable<any> - The response payload
     * @example cy.apiGetPayload('GET', '/api/data').then((payload) => { ... })
     */
    apiGetPayload(method: string, url: string, options?: Partial<Cypress.RequestOptions>): Chainable<any>;

    /**
     * Mocks an API call by intercepting the request and returning a fixture or object as the response.
     * @param method HTTP method (e.g., 'GET', 'POST')
     * @param url API endpoint URL
     * @param mockData Fixture filename (string) or response object
     * @returns Chainable<null>
     * @example cy.mockApi('GET', '/api/data', 'example.json')
     * @example cy.mockApi('POST', '/api/login', { success: true })
     */
    mockApi(method: string, url: string, mockData: string | object): Chainable<null>;

    /**
     * Logs out by clearing cookies and local storage, then redirects to home or login page.
     */
    logout(): Chainable<void>;

    /**
     * Selects an element by data-testid attribute.
     * @param testId The value of the data-testid attribute.
     */
    getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;

    /**
     * Sets the viewport size.
     * @param width The width in pixels.
     * @param height The height in pixels.
     */
    setViewport(width: number, height: number): Chainable<void>;

    /**
     * Waits for a selector to be visible.
     * @param selector The CSS selector.
     * @param timeout Optional timeout in ms (default 10000).
     */
    waitForSelector(selector: string, timeout?: number): Chainable<JQuery<HTMLElement>>;

    /**
     * Asserts that the element has the expected text content.
     * @param selector The CSS selector.
     * @param expected The expected text.
     */
    assertText(selector: string, expected: string): Chainable<JQuery<HTMLElement>>;

    /**
     * Asserts that the element is visible.
     * @param selector The CSS selector.
     */
    assertVisible(selector: string): Chainable<JQuery<HTMLElement>>;

    /**
     * Uploads a file to the specified input element.
     * @param selector The CSS selector for the input.
     * @param filePath The path to the file.
     */
    uploadFile(selector: string, filePath: string): Chainable<JQuery<HTMLElement>>;

    /**
     * Takes a screenshot with the given name.
     * @param name The screenshot name.
     */
    takeScreenshot(name?: string): Chainable<void>;

    /**
     * Clears session storage.
     */
    clearSessionStorage(): Chainable<void>;

    /**
     * Clears all cookies in the browser.
     * @returns Chainable<void>
     * @example cy.clearCookies()
     */
    clearCookies(): Chainable<void>;

    /**
     * Clears local storage in the browser.
     * @returns Chainable<void>
     * @example cy.clearLocalStorage()
     */
    clearLocalStorage(): Chainable<void>;
  }
}
