import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";

export interface BalanceInfo {
    id: number,
    name: string,
    amount: number,
    currency: string,
    diffPrevMonth: number,
}

export interface BalanceInfoState {
    balanceInfo: BalanceInfo[];
    loading: boolean;
    error?: string;
}

const initialState: BalanceInfoState = {
    balanceInfo: [],
    loading: false,
    error: undefined,
};

// Асинхронный thunk для загрузки информации о балансе с сервера
export const fetchBalanceInfo = createAsyncThunk<BalanceInfo[]>(
    "balanceInfo/fetchBalanceInfo",
    async () => {
        const res = await fetch("http://localhost:3001/balanceInfo");
        if (!res.ok) throw new Error("Failed to fetch balance information");
        const data: BalanceInfo[] = await res.json();
        return data;
    }
);

export const BalanceInfoSlice = createSlice({
    name: "balanceInfo",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBalanceInfo.pending, (state) => {
                state.loading = true;
                state.error = undefined;
            })
            .addCase(fetchBalanceInfo.fulfilled, (state, action: PayloadAction<BalanceInfo[]>) => {
                state.loading = false;
                state.balanceInfo = action.payload;
            })
            .addCase(fetchBalanceInfo.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    },
});

export default BalanceInfoSlice.reducer;
