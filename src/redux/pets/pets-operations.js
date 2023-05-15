import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from 'api/add-pet';

export const addPet = createAsyncThunk(
  'pet/add',
  async (data, { rejectWithValue }) => {
    // for (const value of data.values()) {
    //     console.log(value);
    // }
    try {
      const result = await api.addMyNewPet(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);

export const addNotice = createAsyncThunk(
  'notice/add',
  async (data, { rejectWithValue }) => {
    // for (const value of data.values()) {
    //     console.log(value);
    // }
    try {
      const result = await api.addPetNotice(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
