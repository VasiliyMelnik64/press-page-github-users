/// <reference types="cypress" />

import { HomePage } from '../utils/page-objects/HomePage';
import { themes } from '../../src/themes';

describe('Home page flow', () => {
  let validatedHomePageInstance: HomePage;

  beforeEach(() => {
    validatedHomePageInstance = new HomePage().visit().validateLocation('/');
  });

  it('should redirect to users page via button', () => {
    validatedHomePageInstance.redirectToUserspage().validateLocation('/users');
  });
  it('should redirect to users page via navigation link', () => {
    validatedHomePageInstance.navigateToUsersPage().validateLocation('/users');
  });
  it('should redirect back to home page via navigation link', () => {
    validatedHomePageInstance
      .navigateToUsersPage()
      .validateLocation('/users')
      .navigateToHomePage()
      .validateLocation('/');
  });
  it('should switch theme to dark variant', () => {
    validatedHomePageInstance
      .changeTheme()
      .validateTheme(themes.dark.colors.mainBgColor);
  });
  it('should switch theme to light variant', () => {
    validatedHomePageInstance
      .changeTheme(2)
      .validateTheme(themes.light.colors.mainBgColor);
  });
});
