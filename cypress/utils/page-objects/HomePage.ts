/// <reference types="cypress" />
import { PageLayout } from './PageLayout';

interface IHomePage {
  visit(): this;

  /** redirect throw button click, not throw navigation */
  redirectToUserspage(): this;
}

export class HomePage extends PageLayout implements IHomePage {
  visit() {
    cy.visit('/');

    return this;
  }

  redirectToUserspage() {
    cy.get('[data-testid="redirect-to-users-page"]').click();

    return this;
  }
}
