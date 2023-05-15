import { createSlice } from '@reduxjs/toolkit';

import { addPet, addNotice } from './pets-operations';

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
        state.items.push(payload.data);
        console.log('RESPONSE:', payload.data);
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
        console.log('RESPONSE:', payload.data);
      })
      .addCase(addNotice.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default petsSlice.reducer;
