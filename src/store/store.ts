import {configureStore} from "@reduxjs/toolkit";
import {TransactionsSlice} from "./transactionsSlice.ts";
import {type TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export const store = configureStore({
    reducer: {
        transactions: TransactionsSlice.reducer,
    }
})

export const useAppDispatch:()=>typeof store.dispatch = useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;