import type {Transaction} from "./Transaction.ts";
import type {TranArr} from "./TransactionType.ts";

export interface TransactionState {
    rawTransactions: Transaction[];
    transactionsArray: TranArr[];
    loading: boolean;
    error?: string;
}