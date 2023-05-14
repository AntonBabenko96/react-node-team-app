import { createSlice } from '@reduxjs/toolkit';

import { getNoticesByCategory } from './notices-operations';

const initialState = {
  items: [],
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
    name: "notices",
    initialState,
    extraReducers: builder => {
        builder
        .addCase(getNoticesByCategory.pending, handlePending)
        .addCase(getNoticesByCategory.fulfilled, (state, {payload}) => {

            state.isLoading = true;
            state.items = payload;
        })
        .addCase(getNoticesByCategory.rejected, handleRejected)
    }
})

export default noticesSlice.reducer;