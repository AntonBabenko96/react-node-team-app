import { createSlice } from '@reduxjs/toolkit';

import { addPet } from './pets-operations';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const petsSlice = createSlice({
  name: 'pets',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(addPet.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addPet.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items.push(payload.data);
      })
      .addCase(addPet.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default petsSlice.reducer;
