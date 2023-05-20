import { createSlice } from '@reduxjs/toolkit';

import {
  getNotices,
  getNoticeById,
  deleteMyNotice,
} from './notices-operations';

const initialState = {
  items: [],
  item: [],
  myItems: [],
  favorites: [],
  isLoading: false,
  error: null,
  total: null,
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
        state.items = payload.notices;
        console.log();
        state.total = payload.total;
      })
      .addCase(getNotices.rejected, handleRejected)
      .addCase(getNoticeById.pending, handlePending)
      .addCase(getNoticeById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.item = payload;
      })
      .addCase(getNoticeById.rejected, handleRejected)

      .addCase(deleteMyNotice.pending, handlePending)
      .addCase(deleteMyNotice.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;

        state.items = state.items.filter(({ _id }) => _id !== payload);
      })
      .addCase(deleteMyNotice.rejected, handleRejected);
  },
  reducers: {
    changeFavoriteStatus(state, { payload: { id, status } }) {
      const notice = state.items.find(item => item._id === id);
      notice.favorite = status;
    },
  },
});

export const { changeFavoriteStatus } = noticesSlice.actions;

export default noticesSlice.reducer;
