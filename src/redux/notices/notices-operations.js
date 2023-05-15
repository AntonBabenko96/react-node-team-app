import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "api/notices";

// для отримання оголошень по категоріям
export const getNoticesByCategory = createAsyncThunk(
    "notices/getNoticesByCategory",
    async (data, { rejectWithValue }) => {
        try {
            const result = await api.getNoticesByCategory(data);
            return result;
        } catch ({response}) {
            return rejectWithValue(response);
        }
    }
)

// для отримання оголошень по заголовку
export const getNoticesByTitle = createAsyncThunk(
    "notices,getNoticesByTitle",
    async (data, {rejectWithValue}) => {
        try {
            const result = await api.getNoticesByTitle(data);
            return result;
        } catch ({response}) {
            return rejectWithValue(response)
        }
    }
)

// для отримання оголошень по заголовку та по категоріям + фільтр
export const getNoticesByCategoryAndTitle = createAsyncThunk(
    "notices,getNoticesByCategoryAndTitle",
    async (data, {rejectWithValue}) => {
        try {
            const result = await api.getNoticesByCategoryAndTitle(data);
            return result;
        } catch ({response}) {
            return rejectWithValue(response)
        }
    }
)

// для отримання одного оголошення по id
export const getNoticeById = createAsyncThunk(
    "notices/getNoticeById",
    async (data, { rejectWithValue }) => {
        try {
            const result = await api.getNoticesByCategory(data);
            return result;
        } catch ({response}) {
            return rejectWithValue(response);
        }
    }
)