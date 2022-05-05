import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { rootSaga } from './rootSaga';
import { rootReducer as reducer } from './rootReducer';
import { errorMiddleware } from './middlewares';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, errorMiddleware];

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
});

sagaMiddleware.run(rootSaga);
