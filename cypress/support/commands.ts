// ...existing imports...

// Custom command to add Allure test description
Cypress.Commands.add('allureStep', (stepName: string) => {
  /**
   * Adds an Allure step annotation to the report.
   * @param stepName The name of the step to add to the Allure report.
   * @example cy.allureStep('Check if header exists')
   */
  // @ts-ignore
  if (typeof window !== 'undefined' && window.allure) {
    // @ts-ignore
    window.allure.step(stepName);
  }
});
Cypress.Commands.add('allureDescription', (description: string) => {
  /**
   * Adds a description to the Allure report for the current test.
   * @param description The description text to add.
   * @example cy.allureDescription('This test verifies the header.')
   */
  // @ts-ignore
  if (typeof window !== 'undefined' && window.allure) {
    // @ts-ignore
    window.allure.description(description);
  }
});
Cypress.Commands.add('allureStep', (stepName: string) => {
  // @ts-ignore
  if (typeof window !== 'undefined' && window.allure) {
    // @ts-ignore
    window.allure.step(stepName);
  }
});
Cypress.Commands.add('allureDescription', (description: string) => {
  // @ts-ignore
  if (typeof window !== 'undefined' && window.allure) {
    // @ts-ignore
    window.allure.description(description);
  }
});
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('waitForElementToDisappear', (selector: string, timeout: number = 10000) => {
  /**
   * Waits for an element to be removed from the DOM.
   * @param selector The CSS selector.
   * @param timeout Optional timeout in ms (default 10000).
   * @example cy.waitForElementToDisappear('.modal', 5000)
   */
  cy.get('body', { timeout }).should('not.contain', selector);
});

Cypress.Commands.add('assertElementCount', (selector: string, count: number) => {
  /**
   * Asserts the number of elements matching a selector.
   * @param selector The CSS selector.
   * @param count The expected number of elements.
   * @example cy.assertElementCount('.item', 5)
   */
  cy.get(selector).should('have.length', count);
});

Cypress.Commands.add('assertAttribute', (selector: string, attr: string, value: string) => {
  /**
   * Asserts that an element has a specific attribute value.
   * @param selector The CSS selector.
   * @param attr The attribute name.
   * @param value The expected value.
   * @example cy.assertAttribute('input', 'type', 'text')
   */
  cy.get(selector).should('have.attr', attr, value);
});

Cypress.Commands.add('assertUrlContains', (text: string) => {
  /**
   * Asserts that the current URL contains a specific string.
   * @param text The string to check for in the URL.
   * @example cy.assertUrlContains('dashboard')
   */
  cy.url().should('include', text);
});

Cypress.Commands.add('retryUntil', (fn: () => Cypress.Chainable, condition: (result: any) => boolean, options: { retries?: number, delay?: number } = {}) => {
  /**
   * Retries an action or assertion until a condition is met or timeout.
   * @param fn The function to retry.
   * @param condition The condition to check.
   * @param options Optional retries and delay.
   * @example cy.retryUntil(() => cy.get('.item'), el => el.length > 0)
   */
  const { retries = 5, delay = 500 } = options;
  let attempts = 0;
  function attempt() {
    return fn().then((result) => {
      if (condition(result) || attempts >= retries) {
        return result;
      } else {
        attempts++;
        cy.wait(delay);
        return attempt();
      }
    });
  }
  return attempt();
});

Cypress.Commands.add('interceptAndAssert', (method: string, url: string | RegExp, assertFn: (interception: any) => void) => {
  /**
   * Intercepts a network request and asserts on its payload or status.
   * @param method HTTP method (e.g., 'GET', 'POST')
   * @param url API endpoint URL or RegExp
   * @param assertFn Function to assert on interception
   * @example cy.interceptAndAssert('GET', '/api/data', (interception) => { expect(interception.response.statusCode).to.eq(200); })
   */
  cy.intercept(method, url).as('intercepted');
  cy.wait('@intercepted').then(assertFn);
});

Cypress.Commands.add('dragAndDrop', (sourceSelector: string, targetSelector: string) => {
  /**
   * Simulates drag-and-drop between elements.
   * @param sourceSelector The CSS selector for the source element.
   * @param targetSelector The CSS selector for the target element.
   * @example cy.dragAndDrop('.item', '.dropzone')
   */
  cy.get(sourceSelector).trigger('mousedown', { which: 1 });
  cy.get(targetSelector).trigger('mousemove').trigger('mouseup', { force: true });
});

Cypress.Commands.add('waitForAnimationEnd', (selector: string, timeout: number = 10000) => {
  /**
   * Waits for CSS transitions or animations to complete.
   * @param selector The CSS selector.
   * @param timeout Optional timeout in ms (default 10000).
   * @example cy.waitForAnimationEnd('.animated')
   */
  cy.get(selector, { timeout }).should(($el) => {
    const computedStyle = window.getComputedStyle($el[0]);
    expect(computedStyle.animationPlayState).to.eq('paused');
    expect(computedStyle.transitionDuration).to.eq('0s');
  });
});

// For accessibility, requires axe-core plugin
Cypress.Commands.add('assertAccessibility', (options = {}) => {
  /**
   * Runs accessibility checks using axe-core.
   * @param options Optional axe-core options.
   * @example cy.assertAccessibility()
   */
  cy.injectAxe();
  cy.checkA11y(null, options);
});


declare global {
  namespace Cypress {
    interface Chainable {
      waitForElementToDisappear(selector: string, timeout?: number): Chainable;
      assertElementCount(selector: string, count: number): Chainable;
      assertAttribute(selector: string, attr: string, value: string): Chainable;
      assertUrlContains(text: string): Chainable;
      retryUntil(fn: () => Cypress.Chainable, condition: (result: any) => boolean, options?: { retries?: number, delay?: number }): Chainable;
      interceptAndAssert(method: string, url: string | RegExp, assertFn: (interception: any) => void): Chainable;
      dragAndDrop(sourceSelector: string, targetSelector: string): Chainable;
      waitForAnimationEnd(selector: string, timeout?: number): Chainable;
      assertAccessibility(options?: object): Chainable;
      injectAxe(): Chainable;
      checkA11y(context?: any, options?: any, violationCallback?: any, skipFailures?: boolean): Chainable;
    }
  }
}
import { Method } from 'cypress/types/net-stubbing';

// =========================
// Assertion Commands
// =========================
Cypress.Commands.add('assertText', (selector: string, expected: string) => {
  /**
   * Asserts that the element has the expected text content.
   * @param selector The CSS selector.
   * @param expected The expected text.
   * @example cy.assertText('.my-element', 'Hello')
   */
  cy.get(selector).should('have.text', expected);
});

Cypress.Commands.add('measureApiResponseTime', (method: string, url: string, threshold: number) => {
  /**
   * Measures API response time and asserts it is below the threshold (ms).
   * @param method HTTP method (e.g., 'GET', 'POST')
   * @param url API endpoint URL
   * @param threshold Maximum allowed response time in milliseconds
   * @example cy.measureApiResponseTime('GET', '/api/data', 500)
   * @note Always check for error responses and handle them in your tests.
   */
  const start = Date.now();
  cy.request({ method, url }).then((response) => {
    const duration = Date.now() - start;
    expect(duration).to.be.lessThan(threshold);
  });
});

Cypress.Commands.add('measurePageLoadTime', (threshold: number) => {
  /**
   * Measures page load time and asserts it is below the threshold (ms).
   * @param threshold Maximum allowed page load time in milliseconds
   * @example cy.measurePageLoadTime(2000)
   */
  cy.window().then((win) => {
    const timing = win.performance.timing;
    const loadTime = timing.loadEventEnd - timing.navigationStart;
    expect(loadTime).to.be.lessThan(threshold);
  });
});

Cypress.Commands.add('measureResourceLoad', (selector: string, threshold: number) => {
  /**
   * Measures resource load time and asserts it is below the threshold (ms).
   * @param selector The CSS selector for the resource (e.g., img, script)
   * @param threshold Maximum allowed load time in milliseconds
   * @example cy.measureResourceLoad('img.logo', 1000)
   */
  cy.get(selector).then(($el) => {
    const resource = $el[0];
    let src = '';
    if (resource instanceof HTMLImageElement || resource instanceof HTMLScriptElement) {
      src = resource.src;
    }
    if (src) {
      cy.window().then((win) => {
        const entries = win.performance.getEntriesByType('resource');
        const entry = entries.find((e) => (e as PerformanceResourceTiming).name === src);
        if (entry && 'responseEnd' in entry && 'startTime' in entry) {
          const perfEntry = entry as PerformanceResourceTiming;
          const duration = perfEntry.responseEnd - perfEntry.startTime;
          expect(duration).to.be.lessThan(threshold);
        }
      });
    }
  });
});

Cypress.Commands.add('isNotCovered', (selector: string, blockingSelector?: string) => {
  /**
   * Asserts that the element is not visually covered by another element.
   * @param selector The CSS selector for the target element.
   * @param blockingSelector Optional CSS selector for the blocking element.
   * @example cy.isNotCovered('.my-element', '.blocker')
   */
  cy.get(selector).then(($el) => {
    const elRect = $el[0].getBoundingClientRect();
    if (blockingSelector) {
      cy.get(blockingSelector).then(($block) => {
        const blockRect = $block[0].getBoundingClientRect();
        const isCovered =
          blockRect.left < elRect.right &&
          blockRect.right > elRect.left &&
          blockRect.top < elRect.bottom &&
          blockRect.bottom > elRect.top;
        expect(isCovered).to.be.false;
      });
    } else {
      // No blockingSelector: check if element is at top layer
      cy.document().then((doc) => {
        const elAtPoint = doc.elementFromPoint(elRect.left + 1, elRect.top + 1);
        expect(elAtPoint).to.equal($el[0]);
      });
    }
  });
});

Cypress.Commands.add('isInteractable', (selector: string) => {
  /**
   * Asserts that the element is interactable (visible, enabled, not covered).
   * @param selector The CSS selector.
   * @example cy.isInteractable('#play-button')
   */
  cy.get(selector)
    .should('be.visible')
    .should('not.be.disabled')
    .then(($el) => {
      const elRect = $el[0].getBoundingClientRect();
      cy.document().then((doc) => {
        const elAtPoint = doc.elementFromPoint(elRect.left + 1, elRect.top + 1);
        expect(elAtPoint).to.equal($el[0]);
      });
      expect($el).to.have.css('pointer-events', 'auto');
    });
});

Cypress.Commands.add('hasPointerEvents', (selector: string, value: string = 'auto') => {
  /**
   * Asserts that the element has the expected pointer-events CSS property value.
   * @param selector The CSS selector.
   * @param value The expected pointer-events value (default 'auto').
   * @example cy.hasPointerEvents('.my-element', 'auto')
   */
  cy.get(selector).should('have.css', 'pointer-events', value);
});

Cypress.Commands.add('hasCss', (selector: string, property: string, value: string) => {
  /**
   * Asserts that the element has a specific CSS property value.
   * @param selector The CSS selector.
   * @param property The CSS property name.
   * @param value The expected value.
   * @example cy.hasCss('.my-element', 'z-index', '10')
   */
  cy.get(selector).should('have.css', property, value);
});

Cypress.Commands.add('hasClass', (selector: string, className: string) => {
  /**
   * Asserts that the element has a specific class.
   * @param selector The CSS selector.
   * @param className The class name to check for.
   * @example cy.hasClass('.my-element', 'active')
   */
  cy.get(selector).should('have.class', className);
});

Cypress.Commands.add('notHasClass', (selector: string, className: string) => {
  /**
   * Asserts that the element does not have a specific class.
   * @param selector The CSS selector.
   * @param className The class name to check for.
   * @example cy.notHasClass('.my-element', 'disabled')
   */
  cy.get(selector).should('not.have.class', className);
});

Cypress.Commands.add('hasStyle', (selector: string, style: Partial<CSSStyleDeclaration>) => {
  /**
   * Asserts that the element has multiple CSS property values.
   * @param selector The CSS selector.
   * @param style An object of CSS property-value pairs.
   * @example cy.hasStyle('.my-element', { color: 'red', 'font-size': '16px' })
   */
  cy.get(selector).should(($el) => {
    for (const [prop, val] of Object.entries(style)) {
      expect($el).to.have.css(prop, val as string);
    }
  });
});

Cypress.Commands.add('assertVisible', (selector: string) => {
  /**
   * Asserts that the element is visible.
   * @param selector The CSS selector.
   * @example cy.assertVisible('.my-element')
   */
  cy.get(selector).should('be.visible');
});

// =========================
// API Commands
// =========================
Cypress.Commands.add('apiGetPayload', (method: string, url: string, options: Partial<Cypress.RequestOptions> = {}) => {
  /**
   * Makes an API request and returns the response payload.
  import 'cypress-axe';
   * @param method HTTP method (e.g., 'GET', 'POST')
   * @param url API endpoint URL
   * @param options Optional cy.request options (body, headers, etc.)
   * @returns Chainable<any> - The response payload
   * @example cy.apiGetPayload('GET', '/api/data').then((payload) => { ... })
   * @note Always check for error responses and handle them in your tests.
   */
  return cy.request({ method, url, ...options }).then((response) => response.body);
});

Cypress.Commands.add('mockApi', (method: Method, url: string, mockData: string | object) => {
  /**
   * Mocks an API call by intercepting the request and returning a fixture or object as the response.
   * @param method HTTP method (e.g., 'GET', 'POST')
   * @param url API endpoint URL
   * @param mockData Fixture filename (string) or response object
   * @returns Chainable<null>
   * @example cy.mockApi('GET', '/api/data', 'example.json')
   * @example cy.mockApi('POST', '/api/login', { success: true })
   * @note Always check for error responses and handle them in your tests.
   */
  const response = typeof mockData === 'string' ? { fixture: mockData } : mockData;
  cy.intercept(method, url, response).as('mockedApi');
});

// =========================
// Storage Commands
// =========================
Cypress.Commands.overwrite('clearCookies', (originalFn, ...args) => {
  /**
   * Clears all cookies in the browser.
   * @returns Chainable<void>
   * @example cy.clearCookies()
   */
  return originalFn(...args);
});

Cypress.Commands.overwrite('clearLocalStorage', (originalFn, ...args) => {
  /**
   * Clears local storage in the browser.
   * @returns Chainable<void>
   * @example cy.clearLocalStorage()
   */
  return originalFn(...args);
});

Cypress.Commands.add('clearSessionStorage', () => {
  /**
   * Clears session storage.
   * @example cy.clearSessionStorage()
   */
  cy.window().then((win) => {
    win.sessionStorage.clear();
  });
});

// =========================
// UI Actions
// =========================
Cypress.Commands.add('getByTestId', (testId: string) => {
  /**
   * Selects an element by data-testid attribute.
   * @param testId The value of the data-testid attribute.
   * @example cy.getByTestId('submit-button')
   */
  return cy.get(`[data-testid="${testId}"]`);
});
Cypress.Commands.add('getByRole', (role: string) => {
  /**
   * Selects an element by ARIA role.
   * @param role The ARIA role of the element.
   * @example cy.getByRole('button')
   */
  return cy.get(`[role="${role}"]`);
});

Cypress.Commands.add('getByPlaceholder', (placeholder: string) => {
  /**
   * Selects an input element by its placeholder text.
   * @param placeholder The placeholder text.
   * @example cy.getByPlaceholder('Search...')
   */
  return cy.get(`[placeholder="${placeholder}"]`);
});

Cypress.Commands.add('getByLabelText', (labelText: string) => {
  /**
   * Selects an element by its associated label text.
   * @param labelText The label text.
   * @example cy.getByLabelText('Email')
   */
  return cy.contains('label', labelText).invoke('attr', 'for').then((id) => {
    return cy.get(`#${id}`);
  });
});

Cypress.Commands.add('getByText', (text: string) => {
  /**
   * Selects an element containing specific text.
   * @param text The text content to match.
   * @example cy.getByText('Welcome!')
   */
  return cy.contains(text);
});

Cypress.Commands.add('forceClick', (selector: string) => {
  /**
   * Clicks an element even if it is not visible or covered.
   * @param selector The CSS selector.
   * @example cy.forceClick('.hidden-button')
   */
  return cy.get(selector).click({ force: true });
});

Cypress.Commands.add('typeAndEnter', (selector: string, text: string) => {
  /**
   * Types into an input and presses Enter.
   * @param selector The CSS selector for the input.
   * @param text The text to type.
   * @example cy.typeAndEnter('input[name="search"]', 'Cypress')
   */
  return cy.get(selector).type(text).type('{enter}');
});

Cypress.Commands.add('selectDropdownByValue', (selector: string, value: string) => {
  /**
   * Selects a dropdown option by value.
   * @param selector The CSS selector for the dropdown.
   * @param value The value to select.
   * @example cy.selectDropdownByValue('select#country', 'US')
   */
  return cy.get(selector).select(value);
});

Cypress.Commands.add('isVisible', (selector: string) => {
  /**
   * Asserts that the element is visible.
   * @param selector The CSS selector.
   * @example cy.isVisible('.modal')
   */
  return cy.get(selector).should('be.visible');
});

Cypress.Commands.add('isHidden', (selector: string) => {
  /**
   * Asserts that the element is hidden.
   * @param selector The CSS selector.
   * @example cy.isHidden('.loading-spinner')
   */
  return cy.get(selector).should('not.be.visible');
});

Cypress.Commands.add('getByClass', (className: string) => {
  /**
   * Selects an element by class name.
   * @param className The class name of the element (without dot).
   * @example cy.getByClass('active')
   */
  return cy.get(`.${className}`);
});

Cypress.Commands.add('getById', (id: string) => {
  /**
   * Selects an element by ID.
   * @param id The ID of the element (without hash).
   * @example cy.getById('main-header')
   */
  return cy.get(`#${id}`);
});

Cypress.Commands.add('scrollBelowFold', (duration: number = 1200) => {
  /**
   * Scrolls the page just below the visible fold (viewport).
   * @param duration Optional scroll animation duration in milliseconds. Default is 1200.
   * @returns Chainable<void>
   * @example cy.scrollBelowFold() // uses default duration
   * @example cy.scrollBelowFold(500) // uses custom duration
   */
  cy.window().then(win => {
    cy.scrollTo(0, win.innerHeight, { duration });
  });
});

Cypress.Commands.add('scrollToEnd', (duration: number = 1200) => {
  /**
   * Scrolls to the end (bottom) of the page.
   * @param duration Optional scroll animation duration in milliseconds. Default is 1200.
   * @returns Chainable<void>
   * @example cy.scrollToEnd() // uses default duration
   * @example cy.scrollToEnd(500) // uses custom duration
   */
  cy.window().then(() => {
    cy.scrollTo('bottom', { duration });
  });
});

Cypress.Commands.add('scrollToTop', (duration: number = 1200) => {
  /**
   * Scrolls to the top of the page.
   * @param duration Optional scroll animation duration in milliseconds. Default is 1200.
   * @returns Chainable<void>
   * @example cy.scrollToTop() // uses default duration
   * @example cy.scrollToTop(500) // uses custom duration
   */
  cy.window().then(() => {
    cy.scrollTo('top', { duration });
  });
});

Cypress.Commands.add('setViewport', (width: number, height: number) => {
  /**
   * Sets the viewport size.
   * @param width The width in pixels.
   * @param height The height in pixels.
   * @example cy.setViewport(1920, 1080)
   */
  cy.viewport(width, height);
});

Cypress.Commands.add('takeScreenshot', (name: string = 'screenshot') => {
  /**
   * Takes a screenshot with the given name.
   * @param name The screenshot name.
   * @example cy.takeScreenshot('homepage')
   */
  cy.screenshot(name);
});

Cypress.Commands.add('uploadFile', (selector: string, filePath: string) => {
  /**
   * Uploads a file to the specified input element.
   * @param selector The CSS selector for the input.
   * @param filePath The path to the file.
   * @example cy.uploadFile('input[type="file"]', 'cypress/fixtures/sample.pdf')
   */
  cy.get(selector).selectFile(filePath);
});

Cypress.Commands.add('waitForSelector', (selector: string, timeout: number = 10000) => {
  /**
   * Waits for a selector to be visible.
   * @param selector The CSS selector.
   * @param timeout Optional timeout in ms (default 10000).
   * @example cy.waitForSelector('.modal', 5000)
   */
  cy.get(selector, { timeout }).should('be.visible');
});

Cypress.Commands.add('waitForPageReady', () => {
  /**
   * Waits for the page to be fully loaded, all images to be loaded, and (if Angular is present) for the app to be stable.
   * Checks document readiness, image loading, and optionally Angular stability.
   * @returns Chainable<void>
   * @example cy.waitForPageReady()
   */
  cy.document().should((doc) => {
    expect(doc.readyState).to.eq('complete');
  });
  cy.get('img').each(($img) => {
    cy.wrap($img).should(($el) => {
      const img = $el[0] as HTMLImageElement;
      expect(img.complete).to.be.true;
      expect(img.naturalWidth).to.be.greaterThan(0);
    });
  });
  cy.window().then((win) => {
    const angularTestabilities = (win as any).getAllAngularTestabilities;
    if (typeof angularTestabilities === 'function') {
      return new Cypress.Promise((resolve) => {
        const testabilities = angularTestabilities();
        let count = testabilities.length;
        testabilities.forEach((testability: any) => {
          testability.whenStable(() => {
            count--;
            if (count === 0) resolve();
          });
        });
      });
    }
  });
});


// =========================
// Utility Commands
// =========================
Cypress.Commands.add('logout', () => {
  /**
   * Logs out by clearing cookies and local storage, then redirects to home or login page.
   * @example cy.logout()
   */
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.visit('/');
});

// =========================
// Network & Navigation Helpers
// =========================
Cypress.Commands.add('waitForNetworkIdle', (timeout: number = 10000) => {
  /**
   * Waits until there are no active network requests.
   * @param timeout Optional timeout in ms (default 10000).
   * @example cy.waitForNetworkIdle(5000)
   */
  cy.window().then((win) => {
    const performance = win.performance;
    const checkIdle = () => {
      const entries = performance.getEntriesByType('resource');
      const now = Date.now();
      const active = entries.filter((e: any) => e.responseEnd > now - 100);
      return active.length === 0;
    };
    return new Cypress.Promise((resolve, reject) => {
      const start = Date.now();
      const poll = () => {
        if (checkIdle()) return resolve();
        if (Date.now() - start > timeout) return reject('Network idle timeout');
        setTimeout(poll, 100);
      };
      poll();
    });
  });
});

Cypress.Commands.add('waitForUrl', (url: string | RegExp, timeout: number = 10000) => {
  /**
   * Waits until the URL matches a specific value or pattern.
   * @param url The expected URL or pattern.
   * @param timeout Optional timeout in ms (default 10000).
   * @example cy.waitForUrl('/dashboard', 3000)
   */
  cy.url({ timeout }).should(typeof url === 'string' ? 'eq' : 'match', url);
});