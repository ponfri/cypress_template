// Author: Phillip Onfri
// Company: pvoSoft
// Date Created: 07/06/2024
// File Name: visit.site.spec.ts
// Framework: Cypress.io, JS, TS
// Description: Test file for loading website

import { LandingPage } from "../pageObjects/LandingPage.po";
import { UtilitiesPage } from "../pageObjects/UtilitiesPage.po";

const landingPage = new LandingPage("/");
const utilitiesPage = new UtilitiesPage();

describe("Template Description here.", () => {
  beforeEach("Run before each test here.", () => {
    landingPage.visit("/"); // BasePage provides visit()
    cy.waitForPageReady();
  });

  it('[ ] Navigate to Utilities page, check, scroll down/up, go back, and check landing.', { tags: ['@smoke', '@utilities', '@navigation', '@check'] }, () => {
    // Navigate to Utilities page using the menu
    landingPage.LinkUtilities.click();
    cy.waitForPageReady();

    // Check that we are on the correct page
    utilitiesPage.utilitiesHeader.should('be.visible');
    cy.url().should('include', '/utilities');

    // Scroll to the end of the page
    cy.scrollToEnd();

    // Scroll back to the top
    cy.scrollToTop();

    // Go back to previous page
    cy.go('back');
    cy.waitForPageReady();
    // Check that we are back on the landing page
    landingPage.Header.should('exist').and('be.visible').and('contain.text', 'Kitchen Sink');
    cy.url().should('not.include', '/utilities');
  });
});
