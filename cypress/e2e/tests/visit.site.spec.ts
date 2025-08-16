/*
 * Author: Phillip Onfri
 * Company: pvoSoft
 * Date Created: 07/06/2024
 * File Name: visit.site.spec.ts
 * Framework: Cypress.io, JS, TS
 * Description: Test file for loading website
 * ['@regression', '@smoke', '@sanity', '@template'],
 */

import { LandingPage } from '../pageObjects/LandingPage.po';

const landingPage = new LandingPage('/');

describe('Template Description here.', () => {
  beforeEach('Run before each test here.', () => {
  landingPage.visit('/'); // BasePage provides visit()
  });

  // it('Template Test 1 here.', { tags: ['@smoke', '@template'] }, () => {
  //   cy.log('Running Smoke tests!');
  //   console.log('Running Smoke tests!');
  // });

  // it('Template Test 2 here.', { tags: ['@regression', '@template'] }, () => {
  //   cy.log('Running Regression tests!');
  //   console.log('Running Regression tests!');
  // });

  it('[ ] ', () => {
  landingPage.Header.should('contain.text', 'Kitchen Sink');
  landingPage.SubHeader.should('be.visible');
    cy.url().should('include', '.cypress.io');
  });

});