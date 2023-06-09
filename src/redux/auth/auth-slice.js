import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  login,
  logout,
  refresh,
  getUserInfo,
  updateUserInfo,
  updateAvatar,
} from './auth-operations';

const initialState = {
  user: {},
  isLogin: false,
  loading: false,
  error: null,
  newUser: false,
};

const handlePending = state => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.loading = false;
  state.error = payload;
};

const authSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
        state.error = null;
        state.newUser = true;
      })
      .addCase(register.rejected, handleRejected)
      .addCase(login.pending, handlePending)
      .addCase(login.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
        state.error = null;
        state.isLogin = true;
      })
      .addCase(login.rejected, handleRejected)
      .addCase(logout.pending, handlePending)
      .addCase(logout.fulfilled, state => {
        state.loading = false;
        state.user = {};
        state.error = null;
        state.isLogin = false;
      })
      .addCase(logout.rejected, handleRejected)
      .addCase(refresh.pending, state => {
        state.loading = true;
        state.error = null;
        state.isLogin = false;
      })
      .addCase(refresh.fulfilled, state => {
        state.loading = false;
        state.error = null;
        state.isLogin = true;
      })
      .addCase(refresh.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.isLogin = false;
      })
      .addCase(getUserInfo.pending, handlePending)
      .addCase(getUserInfo.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.user = payload;
      })
      .addCase(getUserInfo.rejected, handleRejected)
      .addCase(updateUserInfo.pending, handlePending)
      .addCase(updateUserInfo.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.user = payload;
      })
      .addCase(updateUserInfo.rejected, handleRejected)
      .addCase(updateAvatar.pending, handlePending)
      .addCase(updateAvatar.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.user.avatarURL = payload.avatarURL;
      })
      .addCase(updateAvatar.rejected, handleRejected);
  },
  reducers: {
    setNewUser(state, { payload }) {
      state.newUser = payload;
    },
  },
});

export const { setNewUser } = authSlice.actions;

export default authSlice.reducer;
