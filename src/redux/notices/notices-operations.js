import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from 'api/notices';

// для отримання оголошень по заголовку та по категоріям + фільтр
export const getNotices = createAsyncThunk(
  'notices/getNotices',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.getNotices(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);

// для отримання одного оголошення по id
export const getNoticeById = createAsyncThunk(
  'notices/getNoticeById',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.getNoticeById(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);

// для отримання оголошень авторизованого кристувача створених цим же користувачем
export const getMyNotices = createAsyncThunk(
  'notices/getMyNotices',
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.getMyNotices();
      return data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
