/// <reference types="cypress" />
import { PageLayout } from './PageLayout';

interface IUsersPage {
  visit(): this;
  clickDeleteButton(userName: string): this;
  clickRedirectButton(userName: string): this;
  deleteAllUsers(startNumberOfUsers: number): this;
  navigateToUserProfile(): this;
  validateUsersState(numberOfUsers: number): this;
}

export class UsersPage extends PageLayout implements IUsersPage {
  visit() {
    cy.visit('/users');

    return this;
  }

  deleteUser() {
    cy.get('[data-testname^="user-name-"]')
      .first()
      .invoke('text')
      .then((anyUserName) => {
        this.clickDeleteButton(anyUserName);
      });

    return this;
  }

  clickDeleteButton(userName: string) {
    cy.get(`[data-testid="user-card-delete-${userName}"]`).click();

    return this;
  }

  clickRedirectButton(userName: string) {
    cy.get(`[data-testid^="user-card-redirect-${userName}"]`).first().click();

    return this;
  }

  redirectToGithub() {
    cy.get('[data-testname^="user-name-"]')
      .first()
      .invoke('text')
      .then((anyUserName) => {
        this.clickRedirectButton(anyUserName);

        cy.url().should('be.equal', `https://github.com/${anyUserName}`);
      });

    return this;
  }

  deleteAllUsers(startNumberOfUsers: number) {
    for (let i = 0; i < startNumberOfUsers; i++) {
      cy.get('[data-testname^="user-name-"]')
        .first()
        .invoke('text')
        .then((anyUserName) => {
          this.clickDeleteButton(anyUserName);
        });
    }

    return this;
  }

  navigateToUserProfile() {
    return this;
  }

  validateUsersState(numberOfUsers: number) {
    cy.get('[data-testname^="user-name-"]').should(
      'have.length',
      numberOfUsers
    );

    return this;
  }
}
