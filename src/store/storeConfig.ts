import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/Slice';
import authReducer from './auth/Slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
