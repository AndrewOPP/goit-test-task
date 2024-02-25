import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const allCarsThunk = createAsyncThunk(
  'cars/allCars',
  async (_, thunkAPI) => {
    try {
      const cars = await axios.get(
        `https://65d755f627d9a3bc1d7ac601.mockapi.io/allCars`
      );
      return cars;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
