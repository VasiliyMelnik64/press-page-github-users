import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../services/types';

export type PayloadRequestType = {
  params: {
    [key: string]: string | number;
  };
};
export type PayloadSuccessType = User[];

export type PayloadErrorType = unknown | Error | null;

export type PayloadDeleteType = number;

type StateType = {
  data: User[];
  error: PayloadErrorType;
  loading: boolean;
};

type ActionSuccessType = {
  type: string;
  payload: PayloadSuccessType;
};

export type ActionErrorType = {
  type: string;
  payload: PayloadErrorType;
};

type ActionRequestType = {
  type: string;
  payload: PayloadRequestType;
};

type ActionDeleteType = {
  type: string;
  payload: string | number;
};

export type ActionType =
  | ActionSuccessType
  | ActionErrorType
  | ActionRequestType;

type SliceReducers = {
  getUsersRequest: (state: StateType, action?: ActionRequestType) => void;
  getUsersSuccess: (state: StateType, action: ActionSuccessType) => void;
  getUsersError: (state: StateType, action: ActionErrorType) => void;
  deleteUser: (state: StateType, action: ActionDeleteType) => void;
};

export const usersSlice = createSlice<StateType, SliceReducers>({
  name: 'users',
  initialState: {
    data: [],
    error: null,
    loading: false,
  },
  reducers: {
    getUsersRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    getUsersSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    getUsersError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    deleteUser: (state, action) => {
      state.data = state.data.filter(
        (user: User) => user.id !== +action.payload
      );
    },
  },
});

export const usersListSelector = (state: any): User[] => state.users.data;

export const usersLoadingSelector = (state: any): boolean =>
  state.users.loading;

export const { getUsersRequest, getUsersSuccess, getUsersError, deleteUser } =
  usersSlice.actions;

export const { reducer: usersReducer } = usersSlice;
