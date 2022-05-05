/* eslint-disable camelcase */
export type UserResponse = {
  id: number;
  login: string;
  avatar_url: string;
  url: string;
  html_url: string;
};

export type UsersData = {
  data: UserResponse[];
};

export type User = {
  id: number;
  login: string;
  url: string;
  avatarUrl: string;
  htmlUrl: string;
};
