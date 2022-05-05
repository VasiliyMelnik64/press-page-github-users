/* eslint-disable camelcase */
import { UserResponse, UsersData, User } from '../types';

export const getUsersListFromServer = ({ data = [] }: UsersData): User[] =>
  data.map(getUserDetailsFromServer);

export const getUserDetailsFromServer = ({
  id,
  login,
  avatar_url,
  url,
  html_url,
}: UserResponse): User => ({
  id,
  login,
  url,
  avatarUrl: avatar_url,
  htmlUrl: html_url,
});
