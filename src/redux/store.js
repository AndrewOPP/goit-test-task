import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { carsReducer } from './cars/carsSlice';

const rootReducer = combineReducers({
  cars: carsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
