// Author: Phillip Onfri
// Company: pvoSoft
// Date Created: 07/06/2024
// File Name: visit.site.spec.ts
// Framework: Cypress.io, JS, TS
// Description: Test file for loading website

import LandingPage from "../pageObjects/LandingPage.po";
import UtilitiesPage from "../pageObjects/UtilitiesPage.po";

const landingPage = new LandingPage();
const utilitiesPage = new UtilitiesPage("/utilities");

describe("Landing Page and Utilities Navigation Smoke Tests", () => {
  beforeEach("[ ] Load landing page and wait for ready.", () => {
    landingPage.visit("/"); // BasePage provides visit()
    cy.waitForPageReady();
  });

  it("[ ] should verify we are on the landing page (MCP server)", { tags: ["@smoke", "@mcp", "@landing"] }, () => {
    // Assert the URL is correct (Cypress)
    cy.url().should('include', '/');

    // Assert a key landing page element is visible
    landingPage.kitchenSinkDesc.should('be.visible');
  });

  it.only("[ ] should navigate to utilities, verify page, scroll below fold, to bottom, back to top, and back out", { tags: ["@smoke", "@navigation", "@scroll"] }, () => {
    // Navigate to Utilities page using LandingPage PO
    landingPage.clickNavUtilities();

    // Assert we are on the Utilities page
    utilitiesPage.assertMainHeaderVisible();


  // Wait for page ready (handles images if present)
  cy.waitForPageReady();

    // Scroll below the fold
    cy.scrollBelowFold();

    // Scroll to bottom of page
    cy.scrollToEnd();

    // Scroll back to top
    cy.scrollToTop();

    // Go back to previous page
    cy.go('back');
    
    // Optionally, assert we are back on the landing page
    landingPage.kitchenSinkDesc.should('be.visible');
  });
});