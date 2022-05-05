/* eslint-disable camelcase */
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getUsersRequest,
  deleteUser,
  usersListSelector,
  PayloadRequestType,
} from '../modules/users/users-slice';

import { User } from '../services/types';

type UsersData = {
  users: User[];
  onRequestUsers: (params: PayloadRequestType) => void;
  onDeleteUser: (id: number) => () => void;
};

const USERS_PER_PAGE = 10;

export function useUsersData(): UsersData {
  const dispatch = useDispatch();
  const users = useSelector(usersListSelector);

  const onRequestUsers = (params: PayloadRequestType): void => {
    dispatch(getUsersRequest(params));
  };

  const onDeleteUser = useCallback(
    (id: any): (() => void) =>
      (): void => {
        dispatch(deleteUser(id));
      },
    []
  );

  const params: any = {
    params: { per_page: USERS_PER_PAGE },
  };

  useEffect(() => {
    if (!users.length) {
      onRequestUsers(params);
    }
  }, []);

  return { users, onRequestUsers, onDeleteUser };
}
