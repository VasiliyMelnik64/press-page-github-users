import { all } from 'redux-saga/effects';

import { usersSaga } from '../modules/users/users-sagas';

export function* rootSaga() {
  yield all([usersSaga()]);
}
