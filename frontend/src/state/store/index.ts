import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { counterReducer } from '../slices/counterSlice';
import { baseApi } from '../../api/baseApi';

const rootReducer = combineReducers({
  counter: counterReducer,
  // Подключаем RTK Query API reducer
  [baseApi.reducerPath]: baseApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  // Подключаем RTK Query middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
