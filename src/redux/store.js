import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/auth-slice';
import noticesReducer from './notices/notices-slice';

const store = configureStore({
  reducer: { user: authSlice, notices: noticesReducer },
});

export default store;
