/// <reference types="cypress" />
/// <reference types="cypress" />

import { UsersPage } from '../utils/page-objects/UsersPage';

describe('Users page flow', () => {
  let validatedUsersPageInstance: UsersPage;
  const startNumberOfUsers = 10;

  beforeEach(() => {
    validatedUsersPageInstance = new UsersPage()
      .visit()
      .validateLocation('/users');
  });

  it('should contain certain amount of users (10)', () => {
    validatedUsersPageInstance.validateUsersState(startNumberOfUsers);
  });

  it('should delete users correctly', () => {
    validatedUsersPageInstance
      .validateUsersState(startNumberOfUsers)
      .deleteUser();
  });

  it('should delete all users correctly', () => {
    validatedUsersPageInstance.deleteAllUsers(startNumberOfUsers);

    validatedUsersPageInstance.validateUsersState(0);
  });

  it('should redirect to github user profile', () => {
    validatedUsersPageInstance.redirectToGithub();
  });
});
