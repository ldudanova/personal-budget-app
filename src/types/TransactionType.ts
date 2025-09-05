export type TransactionType = {
    id: number,
    name: string,
    amount: number,
    currency: string,
    type: "income" | "expense",
    group?: string,
    category?: string,
    subcategory?: string,
    additionalInfo?: string,
    iconColor: string,
    budgetLeft?: number,
    transaction?: TransactionType
}

export type TranArr = {
    id: number,
    date: string,
    currencyIncome: string,
    totalIncome: number,
    totalExpense: number,
    currencyExpense: string,
    transactions: Array<TransactionType>,
}

