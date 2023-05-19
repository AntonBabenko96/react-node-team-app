import { createSlice } from '@reduxjs/toolkit';

import { addPet, addNotice, getPets, removePets } from './pets-operations';

const initialState = {
  items: [],
  loading: false,
  error: null,
  result: '',
};

const petsSlice = createSlice({
  name: 'pets',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(addPet.pending, state => {
        state.loading = true;
        state.error = null;
        state.result = `pending`;
      })
      .addCase(addPet.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items.push(payload);
        state.result = `fulfilled`;
      })
      .addCase(addPet.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.result = `rejected`;
      })
      .addCase(addNotice.pending, state => {
        state.loading = true;
        state.error = null;
        state.result = `pending`;
      })
      .addCase(addNotice.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.result = `fulfilled`;
      })
      .addCase(addNotice.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.result = `rejected`;
      })
      .addCase(getPets.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPets.fulfilled, (state, { payload }) => {
        // console.log('🆑  payload:', payload);

        state.loading = false;
        state.items = payload;
        // console.log('RESPONSE:', payload);
      })
      .addCase(getPets.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(removePets.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removePets.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items = state.items.filter(({ _id }) => _id !== payload);
      })
      .addCase(removePets.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default petsSlice.reducer;
