export const TransactionTypeType = {
    Income: "income",
    Expense: "expense",
} as const

export type TransactionTypeType = typeof TransactionTypeType[keyof typeof TransactionTypeType];
