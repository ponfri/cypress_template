// Author: Phillip Onfri
// Company: pvoSoft
// Date Created: 07/06/2024
// File Name: visit.site.spec.ts
// Framework: Cypress.io, JS, TS
// Description: Test file for loading website

import { LandingPage } from "../pageObjects/LandingPage.po";

const landingPage = new LandingPage("/");

describe("Template Description here.", () => {
  beforeEach("Run before each test here.", () => {
    landingPage.visit("/"); // BasePage provides visit()
    cy.waitForPageReady();
  });
});