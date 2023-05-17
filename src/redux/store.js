import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/auth-slice';
import noticesReducer from './notices/notices-slice';
import petsSlice from './pets/pets-slice';
// import {
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

const store = configureStore({
  reducer: { user: authSlice, notices: noticesReducer, pets: petsSlice },
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});

export default store;
