import { createSlice } from '@reduxjs/toolkit';

import {
  getNoticesByCategory,
  getNoticeById,
  getNoticesByTitle,
  getNoticesByCategoryAndTitle,
} from './notices-operations';

const initialState = {
  items: [],
  item: {},
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
      .addCase(getNoticesByCategory.pending, handlePending)
      .addCase(getNoticesByCategory.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(getNoticesByCategory.rejected, handleRejected)
      .addCase(getNoticesByTitle.pending, handlePending)
      .addCase(getNoticesByTitle.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(getNoticesByTitle.rejected, handleRejected)
      .addCase(getNoticesByCategoryAndTitle.pending, handlePending)
      .addCase(getNoticesByCategoryAndTitle.fulfilled, (state, {payload}) => {
        state.isLoading=false;
        state.items = payload;
      })
      .addCase(getNoticesByCategoryAndTitle.rejected, handleRejected)
      .addCase(getNoticeById.pending, handlePending)
      .addCase(getNoticeById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.item = payload;
      })
      .addCase(getNoticeById.rejected, handleRejected);
  },
});

export default noticesSlice.reducer;
