import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../api/auth-api';

export const register = createAsyncThunk(
  'user/register',
  async (data, { rejectWithValue }) => {
    console.log(data);
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
  async (data, { rejectWithValue }) => {
    try {
      await api.addToFavorites(data);
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

export const removeFromFavorites = createAsyncThunk(
  'user/removeFromFavorites',
  async (data, { rejectWithValue }) => {
    try {
      await api.removeFromFavorites(data);
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

export const getFavoritesList = createAsyncThunk(
  'user/getFavoritesList',
  async (_, { rejectWithValue }) => {
    try {
      const { data: result } = await api.getFavoritesList();
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

export const getUserInfo = createAsyncThunk(
  'user/getUserInfo',
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.getUserInfo();
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

export const updateUserInfo = createAsyncThunk(
  'user/updateUserInfo',
  async (data, { rejectWithValue }) => {
    try {
      const res = await api.updateUserInfo(data);
      return res;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

export const refresh = createAsyncThunk(
  'user/refresh',
  async (_, { rejectWithValue }) => {
    try {
      return await api.getCurrent();
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);
