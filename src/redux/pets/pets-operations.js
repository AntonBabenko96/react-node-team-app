import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from 'api/add-pet';
import * as userPets from 'api/user-pets';

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
      return rejectWithValue(response.data.message);
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
      const { data: result } = await api.addPetNotice(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

export const getPets = createAsyncThunk(
  'pet/get',
  async (_, { rejectWithValue }) => {
    try {
      const result = await userPets.getUserPets();

      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

export const removePets = createAsyncThunk(
  'pet/delete',
  async (id, { rejectWithValue }) => {
    try {
      const result = await userPets.deleteUserPets(id);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);
