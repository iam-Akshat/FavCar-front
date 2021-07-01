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
    addFav: (state, action) => {
      const { id } = action.payload;
      state.carDetails[id].user_liked = true;
    },
    removeFav: (state, action) => {
      const { id } = action.payload;
      state.carDetails[id].user_liked = false;
    },
  },
});
export const {
  addCarDetails, addCarPreviews, addFav, removeFav,
} = carSlice.actions;
export default carSlice.reducer;
