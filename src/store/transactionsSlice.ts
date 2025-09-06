import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {TranArr, TransactionType} from "../types/TransactionType.ts";

export interface Transaction {
    id: number;
    date?: string;       // ISO-строка или любая дата
    name: string;
    amount?: number;
    currency?: string;
    type: 'income' | 'expense';
    category?: string;
    details?: TransactionDetail[]; // массив деталей, опционально
}

export interface TransactionDetail {
    name: string;
    category: string;
    qty: number;
    pricePerUnit: number;
    priceTotal: number;
    discount: number;
}

interface TransactionState {
    rawTransactions: Transaction[];
    tranArr: TranArr[];
    loading: boolean;
    error?: string;
}

const initialState: TransactionState = {
    rawTransactions: [],
    tranArr: [],
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

                // Преобразуем данные в TranArr
                const grouped: { [date: string]: TransactionType[] } = {};
                action.payload.forEach(tx => {
                    if (!grouped[tx.date || ""]) grouped[tx.date || ""] = [];
                    grouped[tx.date || ""].push({
                        id: tx.id,
                        name: tx.name,
                        amount: tx.amount || 0,
                        currency: tx.currency || "",
                        type: tx.type,
                        category: tx.category,
                        details: tx.details,
                    });
                });

                state.tranArr = Object.entries(grouped).map(([date, transactions], idx) => ({
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


// export const {  } = TransactionsSlice.actions;
export default TransactionsSlice.reducer;
