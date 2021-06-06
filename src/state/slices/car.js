/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const carSlice = createSlice({
  name: 'car',
  initialState: {
    carPreviews: [],
    carDetails: {},
  },
  reducers: {
    addCarPreviews: (state, action) => {
      state.token = action.payload.token;
      state.carPreviews.push(...action.payload);
    },
    addCarDetails: (state, action) => {
      const { id, data } = action.payload;
      state.carDetails[id] = data;
    },
  },
});
export const { addCarDetails, addCarPreviews } = carSlice.actions;
export default carSlice.reducer;
