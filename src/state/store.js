import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth';
import carReducer from './slices/car';

export default configureStore({
  reducer: { auth: authReducer, car: carReducer },
  devTools: true,
});
