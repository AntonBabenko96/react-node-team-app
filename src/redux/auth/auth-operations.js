import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../api/auth-api ';

export const register = createAsyncThunk(
  'user/register',
  async (data, { rejectWithValue }) => {
    console.log(data)
    try {
      const result = await api.register(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);
export const login = createAsyncThunk(
  'user/login',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.login(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);
export const logout = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue }) => {
    try {
      const result = await api.logout();
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

export const addToFavorites = createAsyncThunk(
  'user/addToFavorites',
  async(data, {rejectWithValue}) => {
    try {
      await api.addToFavorites(data);
    } catch ({response}) {
      return rejectWithValue(response.data.message);
    }
  }
)

export const removeFromFavorites = createAsyncThunk(
  'user/removeFromFavorites',
  async(data, {rejectWithValue}) => {
    try {
      await api.removeFromFavorites(data);
    } catch ({response}) {
      return rejectWithValue(response.data.message);
    }
  }
)

export const getFavoritesList = createAsyncThunk(
  'user/getFavoritesList',
  async(data, {rejectWithValue}) => {
    try {
      const {data: result} = await api.getFavoritesList(data);
      return result;
    } catch ({response}) {
      return rejectWithValue(response.data.message);
    }
  }
)