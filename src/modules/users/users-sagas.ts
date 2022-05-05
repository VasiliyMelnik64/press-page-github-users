import { takeLatest, put, call } from 'redux-saga/effects';

import {
  getUsersRequest,
  getUsersSuccess,
  getUsersError,
  ActionType,
  PayloadSuccessType,
} from './users-slice';
import { getAllUsers } from '../../services/api/usersApi';

function* fetchUsersData(action: ActionType) {
  try {
    const data: PayloadSuccessType = yield call(getAllUsers, action.payload);

    yield put(getUsersSuccess(data));
  } catch (e) {
    yield put(getUsersError(e));
  }
}

export function* usersSaga() {
  /**
   * getUsersRequest(sampleData).type may look a bit unusual, but action creators are
   * pure functions that have no side effects. At this point, the call occurs without
   * the "dispatch" method, so a plain object is returned here (with necessary field "type")
   */
  const sampleData: any = {};

  yield takeLatest(getUsersRequest(sampleData).type, fetchUsersData);
}
