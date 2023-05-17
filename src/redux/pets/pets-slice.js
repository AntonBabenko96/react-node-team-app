import { createSlice } from '@reduxjs/toolkit';

import { addPet, addNotice, getPets, removePets } from './pets-operations';

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
        // console.log(`LOADING`);
      })
      .addCase(addPet.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items.push(payload);
        // console.log('RESPONSE:', payload);
      })
      .addCase(addPet.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        // console.log(`ERROR`, payload);
      })
      .addCase(addNotice.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addNotice.fulfilled, (state, { payload }) => {
        state.loading = false;
        console.log('RESPONSE:', payload);
      })
      .addCase(addNotice.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getPets.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPets.fulfilled, (state, { payload }) => {
        console.log('🆑  payload:', payload);

        state.loading = false;
        state.items = payload;
        console.log('RESPONSE:', payload);
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
        state.items = state.items.filter(({ id }) => id !== payload.id);
        console.log('RESPONSE:', payload);
      })
      .addCase(removePets.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default petsSlice.reducer;
