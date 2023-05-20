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
      Notify.failure(response.data.message);
      return rejectWithValue(response.data.message);
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
      Notify.failure(response.data.message);
      return rejectWithValue(response.data.message);
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
