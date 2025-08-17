
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    // =========================
    // Assertion Commands
    // =========================
    /**
     * Asserts that the element has the expected text content.
     * @param selector The CSS selector.
     * @param expected The expected text.
     */
    assertText(selector: string, expected: string): Chainable<JQuery<HTMLElement>>;
  /**
   * Asserts that the element is visible.
   * @param selector The CSS selector.
   * @example cy.assertVisible('.my-element')
   */
  assertVisible(selector: string): Chainable<JQuery<HTMLElement>>;
  /**
   * Measures API response time and asserts it is below the threshold (ms).
   * @param method HTTP method (e.g., 'GET', 'POST')
   * @param url API endpoint URL
   * @param threshold Maximum allowed response time in milliseconds
   * @example cy.measureApiResponseTime('GET', '/api/data', 500)
   */
  measureApiResponseTime(method: string, url: string, threshold: number): Chainable<void>;
  /**
   * Measures page load time and asserts it is below the threshold (ms).
   * @param threshold Maximum allowed page load time in milliseconds
   * @example cy.measurePageLoadTime(2000)
   */
  measurePageLoadTime(threshold: number): Chainable<void>;
  /**
   * Measures resource load time and asserts it is below the threshold (ms).
   * @param selector The CSS selector for the resource (e.g., img, script)
   * @param threshold Maximum allowed load time in milliseconds
   * @example cy.measureResourceLoad('img.logo', 1000)
   */
  measureResourceLoad(selector: string, threshold: number): Chainable<void>;
  /**
   * Asserts that the element is not visually covered by another element.
   * @param selector The CSS selector for the target element.
   * @param blockingSelector Optional CSS selector for the blocking element.
   * @example cy.isNotCovered('.my-element', '.blocker')
   */
  isNotCovered(selector: string, blockingSelector?: string): Chainable<JQuery<HTMLElement>>;
  /**
   * Asserts that the element is interactable (visible, enabled, not covered).
   * @param selector The CSS selector.
   * @example cy.isInteractable('#play-button')
   */
  isInteractable(selector: string): Chainable<JQuery<HTMLElement>>;
  /**
   * Asserts that the element has the expected pointer-events CSS property value.
   * @param selector The CSS selector.
   * @param value The expected pointer-events value (default 'auto').
   * @example cy.hasPointerEvents('.my-element', 'auto')
   */
  hasPointerEvents(selector: string, value?: string): Chainable<JQuery<HTMLElement>>;
  /**
   * Asserts that the element has a specific CSS property value.
   * @param selector The CSS selector.
   * @param property The CSS property name.
   * @param value The expected value.
   * @example cy.hasCss('.my-element', 'z-index', '10')
   */
  hasCss(selector: string, property: string, value: string): Chainable<JQuery<HTMLElement>>;
  /**
   * Asserts that the element has a specific class.
   * @param selector The CSS selector.
   * @param className The class name to check for.
   * @example cy.hasClass('.my-element', 'active')
   */
  hasClass(selector: string, className: string): Chainable<JQuery<HTMLElement>>;
  /**
   * Asserts that the element does not have a specific class.
   * @param selector The CSS selector.
   * @param className The class name to check for.
   * @example cy.notHasClass('.my-element', 'disabled')
   */
  notHasClass(selector: string, className: string): Chainable<JQuery<HTMLElement>>;
  /**
   * Asserts that the element has multiple CSS property values.
   * @param selector The CSS selector.
   * @param style An object of CSS property-value pairs.
   * @example cy.hasStyle('.my-element', { color: 'red', 'font-size': '16px' })
   */
  hasStyle(selector: string, style: Partial<CSSStyleDeclaration>): Chainable<JQuery<HTMLElement>>;

    // =========================
    // API Commands
    // =========================
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
  * @example cy.mockApi('GET', Cypress.env('apiBaseUrl')[Cypress.env('env')] + '/users', { users: [] })
     */
    mockApi(method: string, url: string, mockData: string | object): Chainable<null>;

    // =========================
    // Storage Commands
    // =========================
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
  /**
   * Clears session storage.
   * @example cy.clearSessionStorage()
   */
  clearSessionStorage(): Chainable<void>;

    // =========================
    // UI Actions
    // =========================
  /**
   * Selects an element by data-testid attribute.
   * @param testId The value of the data-testid attribute.
   * @example cy.getByTestId('submit-button')
   */
  getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;

  /**
   * Selects an element by class name.
   * @param className The class name of the element (without dot).
   * @example cy.getByClass('active')
   */
  getByClass(className: string): Chainable<JQuery<HTMLElement>>;

  /**
   * Selects an element by ID.
   * @param id The ID of the element (without hash).
   * @example cy.getById('main-header')
   */
  getById(id: string): Chainable<JQuery<HTMLElement>>;
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
   * Sets the viewport size.
   * @param width The width in pixels.
   * @param height The height in pixels.
   * @example cy.setViewport(1920, 1080)
   */
  setViewport(width: number, height: number): Chainable<void>;
  /**
   * Takes a screenshot with the given name.
   * @param name The screenshot name.
   * @example cy.takeScreenshot('homepage')
   */
  takeScreenshot(name?: string): Chainable<void>;
  /**
   * Uploads a file to the specified input element.
   * @param selector The CSS selector for the input.
   * @param filePath The path to the file.
   * @example cy.uploadFile('input[type="file"]', 'cypress/fixtures/sample.pdf')
   */
  uploadFile(selector: string, filePath: string): Chainable<JQuery<HTMLElement>>;
  /**
   * Waits for a selector to be visible.
   * @param selector The CSS selector.
   * @param timeout Optional timeout in ms (default 10000).
   * @example cy.waitForSelector('.modal', 5000)
   */
  waitForSelector(selector: string, timeout?: number): Chainable<JQuery<HTMLElement>>;
  /**
   * Waits for the page to be fully loaded, all images to be loaded, and (if Angular is present) for the app to be stable.
   * Checks document readiness, image loading, and optionally Angular stability.
   * @returns Chainable<void>
   * @example cy.waitForPageReady()
   */
  waitForPageReady(): Chainable<void>;

      /**
       * Selects an element by ARIA role.
       * @param role The ARIA role of the element.
       * @example cy.getByRole('button')
       */
      getByRole(role: string): Chainable<JQuery<HTMLElement>>;

  /**
   * Selects an input element by its placeholder text.
   * @param placeholder The placeholder text.
   * @example cy.getByPlaceholder('Search...')
   */
  getByPlaceholder(placeholder: string): Chainable<JQuery<HTMLElement>>;

  /**
   * Selects an element by its associated label text.
   * @param labelText The label text.
   * @example cy.getByLabelText('Email')
   */
  getByLabelText(labelText: string): Chainable<JQuery<HTMLElement>>;

  /**
   * Selects an element containing specific text.
   * @param text The text content to match.
   * @example cy.getByText('Welcome!')
   */
  getByText(text: string): Chainable<JQuery<HTMLElement>>;

  /**
   * Clicks an element even if it is not visible or covered.
   * @param selector The CSS selector.
   * @example cy.forceClick('.hidden-button')
   */
  forceClick(selector: string): Chainable<JQuery<HTMLElement>>;

  /**
   * Types into an input and presses Enter.
   * @param selector The CSS selector for the input.
   * @param text The text to type.
   * @example cy.typeAndEnter('input[name="search"]', 'Cypress')
   */
  typeAndEnter(selector: string, text: string): Chainable<JQuery<HTMLElement>>;

  /**
   * Selects a dropdown option by value.
   * @param selector The CSS selector for the dropdown.
   * @param value The value to select.
   * @example cy.selectDropdownByValue('select#country', 'US')
   */
  selectDropdownByValue(selector: string, value: string): Chainable<JQuery<HTMLElement>>;

  /**
   * Asserts that the element is visible.
   * @param selector The CSS selector.
   * @example cy.isVisible('.modal')
   */
  isVisible(selector: string): Chainable<JQuery<HTMLElement>>;

  /**
   * Asserts that the element is hidden.
   * @param selector The CSS selector.
   * @example cy.isHidden('.loading-spinner')
   */
  isHidden(selector: string): Chainable<JQuery<HTMLElement>>;

    // =========================
    // Network & Navigation Helpers
    // =========================

  /**
   * Waits until there are no active network requests.
   * @param timeout Optional timeout in ms (default 10000).
   * @example cy.waitForNetworkIdle(5000)
   */
  waitForNetworkIdle(timeout?: number): Chainable<void>;

  /**
   * Waits until the URL matches a specific value or pattern.
   * @param url The expected URL or pattern.
   * @param timeout Optional timeout in ms (default 10000).
   * @example cy.waitForUrl('/dashboard', 3000)
   */
  waitForUrl(url: string | RegExp, timeout?: number): Chainable<void>;

    // =========================
    // Utility Commands
    // =========================
  /**
   * Logs out by clearing cookies and local storage, then redirects to home or login page.
   * @example cy.logout()
   */
  logout(): Chainable<void>;
  }
}
