import { createSlice } from '@reduxjs/toolkit';

import {
  getNotices,
  getNoticeById,
  deleteMyNotice,
  addToFavorites,
  removeFromFavorites,
} from './notices-operations';

const initialState = {
  items: [],
  item: [],
  myItems: [],
  favorites: [],
  isLoading: false,
  error: null,
  total: null,
  favoriteStatus: null,
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
        state.total = payload.total;
        const filter = payload.notices.filter(item => item.favorite);
        state.favorites = filter.map(item => item._id);
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
      .addCase(deleteMyNotice.rejected, handleRejected)
      .addCase(addToFavorites.pending, handlePending)
      .addCase(addToFavorites.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.favorites.push(payload);
      })
      .addCase(addToFavorites.rejected, handleRejected)
      .addCase(removeFromFavorites.pending, handlePending)
      .addCase(removeFromFavorites.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        const index = state.favorites.findIndex(cardId => cardId === payload);
        if (index !== -1) {
          state.favorites.splice(index, 1);
        }
      })
      .addCase(removeFromFavorites.rejected, handleRejected);
  },
  reducers: {
    changeFavoriteStatus(state, { payload: { id, status } }) {
      const notice = state.items.find(item => item._id === id);
      notice.favorite = status;
      state.favoriteStatus = id;
    },
  },
});

export const { changeFavoriteStatus } = noticesSlice.actions;

export default noticesSlice.reducer;
