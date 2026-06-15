import type {TransactionDetail} from "./TransactionDetail.ts";

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