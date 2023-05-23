import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import * as api from '../../api/auth-api';

export const login = createAsyncThunk(
  'user/login',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.login(data);
      return result;
    } catch ({ response }) {
      Notify.failure(response.data.message);
      return rejectWithValue(response.data.message);
    }
  }
);
export const register = createAsyncThunk(
  'user/register',
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const result = await api.register(data);
      dispatch(login(data));
      return result;
    } catch ({ response }) {
      Notify.failure(response.data.message);
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
      Notify.failure(response.data.message);
      return rejectWithValue(response.data.message);
    }
  }
);

export const addToFavorites = createAsyncThunk(
  'user/addToFavorites',
  async (data, { rejectWithValue }) => {
    try {
      await api.addToFavorites(data);
      return data;
    } catch ({ response }) {
      Notify.failure(response.data.message);
      return rejectWithValue(response.data.message);
    }
  }
);

export const removeFromFavorites = createAsyncThunk(
  'user/removeFromFavorites',
  async (data, { rejectWithValue }) => {
    try {
      await api.removeFromFavorites(data);
      return data;
    } catch ({ response }) {
      Notify.failure(response.data.message);
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
      Notify.failure(response.data.message);
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
      Notify.failure(response.data.message);
      return rejectWithValue(response.data.message);
    }
  }
);

export const refresh = createAsyncThunk(
  'user/refresh',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const result = await api.getCurrent();
      dispatch(getUserInfo());
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

export const updateAvatar = createAsyncThunk(
  'user/updateAvatar',
  async (data, { rejectWithValue }) => {
    try {
      const res = await api.updateUserAvatar(data);
      return res;
    } catch ({ response }) {
      Notify.failure(response.data.message);
      return rejectWithValue(response.data.message);
    }
  }
);
