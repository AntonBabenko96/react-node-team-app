import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "api/notices";

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