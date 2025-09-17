import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {dateFormatYearMonthDayString} from "../helpers/date/format.ts";
import type {TransactionType} from "../types/TransactionType.ts";
import type {Transaction} from "../types/Transaction.ts";
import type {TransactionState} from "../types/TransactionState.ts";

const initialState: TransactionState = {
    rawTransactions: [],
    transactionsArray: [],
    loading: false,
    error: undefined,
};

// Асинхронный thunk для загрузки транзакций с сервера
export const fetchTransactions = createAsyncThunk<Transaction[]>(
    "transactions/fetchTransactions",
    async () => {
        const res = await fetch("http://localhost:3001/transactions");
        if (!res.ok) throw new Error("Failed to fetch transactions");
        const data: Transaction[] = await res.json();
        return data;
    }
);


export const TransactionsSlice = createSlice({
    name: "transactions",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTransactions.pending, (state) => {
                state.loading = true;
                state.error = undefined;
            })
            .addCase(fetchTransactions.fulfilled, (state, action: PayloadAction<Transaction[]>) => {
                state.loading = false;
                state.rawTransactions = action.payload;

                // Преобразуем данные в transactionsArray
                const grouped: { [date: string]: TransactionType[] } = {};

                action.payload.forEach(tx => {
                    const date = new Date(tx.date || "");

                    // Формат: "YYYY-MM-DD" — удобно для ключей группировки
                    const dd = dateFormatYearMonthDayString(date);

                    if (!grouped[dd || ""]) grouped[dd || ""] = [];
                    grouped[dd || ""].push({
                        id: tx.id,
                        name: tx.name,
                        amount: tx.amount || 0,
                        currency: tx.currency || "",
                        type: tx.type,
                        category: tx.category,
                        details: tx.details,
                    });
                });

                state.transactionsArray = Object.entries(grouped).map(([date, transactions], idx) => ({
                    id: idx,
                    date,
                    currencyIncome: "€", // здесь можно рассчитать отдельно
                    currencyExpense: "€", // тоже
                    totalIncome: transactions
                        .filter(t => t.type === "income")
                        .reduce((sum, t) => sum + (t.amount || 0), 0),
                    totalExpense: transactions
                        .filter(t => t.type === "expense")
                        .reduce((sum, t) => sum + (t.amount || 0), 0),
                    transactions,
                }));
            })
            .addCase(fetchTransactions.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default TransactionsSlice.reducer;
