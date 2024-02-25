import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { allCarsThunk } from './carsOperation';

const INITIAL_STATE = {
  cars: [],
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState: INITIAL_STATE,
  extraReducers: builder =>
    builder
      .addCase(allCarsThunk.fulfilled, (state, action) => {
        state.error = null;
        state.cars = action.payload.data;
        state.isLoading = false;
      })
      .addMatcher(isAnyOf(allCarsThunk.pending), state => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(isAnyOf(allCarsThunk.rejected), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const carsReducer = carsSlice.reducer;
