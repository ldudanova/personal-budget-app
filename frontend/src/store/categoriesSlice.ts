import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {CategoriesSpentTotalState} from "../types/CategoriesSpentTotalState.ts";

const initialState: CategoriesSpentTotalState = {
    categoriesSpentTotal: [],
    loading: false,
    error: undefined,
};

export interface CategoriesSpentTotal {
    id: number,
    name: string,
    currency: string,
    amount: number,
    color: string,
}

// Асинхронный thunk для загрузки трат по категориям для графика на dashboard с сервера
export const fetchCategoriesSpentTotal = createAsyncThunk<CategoriesSpentTotal[]>(
    "categoriesSpentTotalState/fetchCategoriesSpentTotalState",
    async () => {
        const res = await fetch("http://localhost:3001/categoriesSpentTotal");
        if (!res.ok) throw new Error("Failed to fetch categoriesSpentTotal");
        const data: CategoriesSpentTotal[] = await res.json();
        return data;
    }
);

export const CategoriesSpentTotalSlice = createSlice({
    name: "categoriesSpentTotal",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategoriesSpentTotal.pending, (state) => {
                state.loading = true;
                state.error = undefined;
            })
            .addCase(fetchCategoriesSpentTotal.fulfilled, (state, action: PayloadAction<CategoriesSpentTotal[]>) => {
                state.loading = false;
                state.categoriesSpentTotal = action.payload;
            })
            .addCase(fetchCategoriesSpentTotal.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
})

export default CategoriesSpentTotalSlice.reducer;