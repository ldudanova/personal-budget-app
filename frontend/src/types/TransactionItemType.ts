export type TransactionItemType = {
    name: string,
    category: string,
    qty: number,
    pricePerUnit: number,
    priceTotal: number,
    discount?: number,
}