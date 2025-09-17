import {configureStore} from "@reduxjs/toolkit";
import {type TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {TransactionsSlice} from "./transactionsSlice.ts";
import {CategoriesSpentTotalSlice} from "./categoriesSlice.ts";

export const store = configureStore({
    reducer: {
        transactions: TransactionsSlice.reducer,
        categoriesSpentTotal: CategoriesSpentTotalSlice.reducer,
    }
})

export const useAppDispatch:()=>typeof store.dispatch = useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;