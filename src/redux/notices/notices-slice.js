import { createSlice } from '@reduxjs/toolkit';

import { getNotices, getNoticeById, getMyNotices } from './notices-operations';

const initialState = {
  items: [],
  item: {},
  myItems: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getNotices.pending, handlePending)
      .addCase(getNotices.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload;
      })
      .addCase(getNotices.rejected, handleRejected)
      .addCase(getNoticeById.pending, handlePending)
      .addCase(getNoticeById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.item = payload;
      })
      .addCase(getNoticeById.rejected, handleRejected)
      .addCase(getMyNotices.pending, handlePending)
      .addCase(getMyNotices.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.myItems = payload;
      })
      .addCase(getMyNotices.rejected, handleRejected);
  },
});

export default noticesSlice.reducer;
