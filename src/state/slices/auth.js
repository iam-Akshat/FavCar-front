/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const token = localStorage.getItem('token');
const userInfo = localStorage.getItem('userInfo');
export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token,
    userInfo: userInfo ? JSON.parse(userInfo) : {},
  },
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.userInfo = action.payload.userInfo;
    },
    logout: (state) => {
      state.token = null;
      state.userInfo = null;
    },
  },
});
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
