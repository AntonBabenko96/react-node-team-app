import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../api/auth-api';

export const register = createAsyncThunk(
  'user/register',
  async (data, { rejectWithValue }) => {
    try {
      return await api.register(data);
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

export const login = createAsyncThunk(
  'user/login',
  async (data, { rejectWithValue }) => {
    try {
      return await api.login(data);
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

export const logout = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue }) => {
    try {
      return await api.logout();
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
