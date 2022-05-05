import { hexToRgb } from '../helpers';

interface IPageLayout {
  validateTheme(color: string): void;
  changeTheme(counts?: number): void;
  navigateToUsersPage(): void;
  navigateToHomePage(): void;
  validateLocation(location: string): this;
}

export class PageLayout implements IPageLayout {
  validateLocation(location: string) {
    cy.location('pathname').should('contain', location);

    return this;
  }

  changeTheme(counts = 1) {
    for (let i = 0; i < counts; i++) {
      cy.get('[data-testid="theme-switcher"]').click();
    }

    return this;
  }

  validateTheme(color: string) {
    cy.get('[data-testid="page-layout-container"]').should(
      'have.css',
      'background-color',
      hexToRgb(color)
    );

    return this;
  }

  navigateToHomePage() {
    cy.get('[data-testid="navigate-to-navigation.home-page"]').click();

    return this;
  }

  navigateToUsersPage() {
    cy.get('[data-testid="navigate-to-navigation.users-page"]').click();

    return this;
  }
}
