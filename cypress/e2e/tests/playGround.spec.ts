// Author: Phillip Onfri
// Company: pvoSoft
// Date Created: 07/06/2024
// File Name: visit.site.spec.ts
// Framework: Cypress.io, JS, TS
// Description: Test file for loading website

import LandingPage from "../pageObjects/LandingPage.po";

const landingPage = new LandingPage();

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
});