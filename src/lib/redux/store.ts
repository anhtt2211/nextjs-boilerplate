import { counterReducer } from './slices/counter';
import { Action, configureStore, Store, ThunkAction } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root.saga';

const sagaMiddleware = createSagaMiddleware();

export const store: Store = configureStore({
  reducer: {
    counter: counterReducer
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;