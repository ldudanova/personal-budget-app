import type {TransactionItemType} from "./TransactionItemType.ts";
import {TransactionTypeType} from "./TransactionTypeType.ts";

export type TransactionType = {
    id: number,
    name: string,
    amount: number,
    currency: string,
    type: TransactionTypeType,
    group?: string,
    category?: string,
    subcategory?: string,
    additionalInfo?: string,
    iconColor: string,
    budgetLeft?: number,
    transaction?: TransactionType
    details?: Array<TransactionItemType>
}

//TODO: определить этот тип и вынести в отдельный файл
export type TranArr = {
    id: number,
    date: string,
    currencyIncome: string,
    totalIncome: number,
    totalExpense: number,
    currencyExpense: string,
    transactions: Array<TransactionType>,
}

