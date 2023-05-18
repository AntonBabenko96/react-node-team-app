import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

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

// для видалення оголошення авторизованого кристувача створеного цим же користувачем
export const deleteMyNotice = createAsyncThunk(
  'notices/deleteMyNotice',
  async (data, { rejectWithValue }) => {
    try {
      await api.deleteMyNotice(data);
      Notify.success('The notice has been successfully removed');
      return data;
    } catch ({ response }) {
      Notify.error('Something went wrong, please try again');
      return rejectWithValue(response);
    }
  }
);

// для отримання улюблених оголошень авторизованого кристувача
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
