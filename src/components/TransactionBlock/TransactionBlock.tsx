import Card from "../Cards/Card.tsx";
import type {TranArr, TransactionType} from "../../types/TransactionType.ts";
import {TransactionRow} from "./TransactionRow.tsx";

export default function TransactionBlock() {
    const transactionsArr: Array<TranArr> = [
        {
            id: 1,
            date: "4 Sep, Today",
            totalExpense: 74,
            currencyExpense: "€",
            totalIncome: 0,
            currencyIncome: "€",
            transactions: [
                {
                    id: 1,
                    name: "Продукты в Lidl",
                    amount: 34,
                    currency: "€",
                    type: "expense",
                    iconColor: "violet-400",
                    budgetLeft: 23,
                    details: [
                        {
                            name: "Milk",
                            category: "milk",
                            qty: 1,
                            pricePerUnit: 1.25,
                            priceTotal: 1.25,
                            discount: 0,
                        },
                        {
                            name: "Grated cheese",
                            category: "cheese",
                            qty: 6,
                            pricePerUnit: 2.09,
                            priceTotal: 12.54,
                            discount: 4.18,
                        },
                        {
                            name: "Butter croissant",
                            category: "вкусняшки",
                            qty: 3,
                            pricePerUnit: 0.69,
                            priceTotal: 0.27,
                            discount: 1.80,
                        },
                        {
                            name: "Mozzarella",
                            category: "cheese",
                            qty: 1,
                            pricePerUnit: 1.29,
                            priceTotal: 1.29,
                            discount: 0,
                        },
                        {
                            name: "Что-то очень-очень очень-очень вкусное",
                            category: "вкусняшки",
                            qty: 1,
                            pricePerUnit: 120,
                            priceTotal: 120,
                            discount: 0,
                        },
                        {
                            name: "Milk",
                            category: "milk",
                            qty: 1,
                            pricePerUnit: 1.25,
                            priceTotal: 1.25,
                            discount: 0,
                        },
                        {
                            name: "Grated cheese",
                            category: "cheese",
                            qty: 6,
                            pricePerUnit: 2.09,
                            priceTotal: 12.54,
                            discount: 4.18,
                        },
                        {
                            name: "Butter croissant",
                            category: "вкусняшки",
                            qty: 3,
                            pricePerUnit: 0.69,
                            priceTotal: 0.27,
                            discount: 1.80,
                        },
                        {
                            name: "Mozzarella",
                            category: "cheese",
                            qty: 1,
                            pricePerUnit: 1.29,
                            priceTotal: 1.29,
                            discount: 0,
                        },
                        {
                            name: "Что-то очень-очень очень-очень вкусное",
                            category: "вкусняшки",
                            qty: 1,
                            pricePerUnit: 120,
                            priceTotal: 120,
                            discount: 0,
                        },
                    ]
                },
                {
                    id: 2,
                    name: "Книжный",
                    amount: 34,
                    currency: "€",
                    type: "expense",
                    iconColor: "emerald-600",
                    budgetLeft: 23,
                },
                {
                    id: 3,
                    name: "Витамины в аптеке",
                    amount: 55,
                    currency: "€",
                    type: "expense",
                    iconColor: "cyan-500",
                    budgetLeft: -2,
                },
            ]
        },
        {
            id: 2,
            date: "3 Sep, Wednesday",
            totalExpense: 56,
            currencyExpense: "€",
            totalIncome: 2000,
            currencyIncome: "€",
            transactions: [
                {
                    id: 1,
                    name: "Кофе",
                    amount: 15,
                    currency: "€",
                    type: "expense",
                    iconColor: "yellow-300",
                    budgetLeft: 23,
                },
                {
                    id: 2,
                    name: "Penny's",
                    amount: 36,
                    currency: "€",
                    type: "expense",
                    iconColor: "pink-300",
                    budgetLeft: 23,
                },
                {
                    id: 3,
                    name: "Salary",
                    amount: 1000,
                    currency: "€",
                    type: "income",
                    iconColor: "green-300",
                },
                {
                    id: 4,
                    name: "Tea",
                    amount: 150,
                    currency: "€",
                    type: "expense",
                    iconColor: "yellow-300",
                    budgetLeft: 23,
                },
                {
                    id: 5,
                    name: "OnlyFans",
                    amount: 2000,
                    currency: "€",
                    type: "income",
                    iconColor: "pink-300",
                },
                {
                    id: 3,
                    name: "Salary",
                    amount: 100,
                    currency: "€",
                    type: "income",
                    iconColor: "green-300",
                },
            ]
        }
    ];


    return (
        <>
            <h2 className="text-2xl font-bold font-sans mb-4 px-2">
                Transactions
            </h2>
            <div className="h-[calc(100vh-250px)] overflow-hidden relative">
                <div
                    className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-violet-400 scrollbar-track-gray-100 rounded-lg relative pb-8 pr-4">
                    {transactionsArr.map((tran: TranArr) => (
                        <div className={"mb-4"} key={tran.id}>
                            <div key={tran.id}
                                 className="sticky top-0 z-10 bg-gray-100 pl-2 pr-4 flex justify-between">
                                <div className="pb-2">{tran.date}</div>
                                <div className="flex justify-between">
                                    {
                                        tran.totalExpense > 0 && (
                                            <div className="mr-2">
                                        <span className="text-red-800">
                                            &#8595;
                                        </span>
                                                {tran.currencyExpense}{tran.totalExpense}
                                            </div>
                                        )
                                    }
                                    {
                                        tran.totalIncome > 0 && (
                                            <div>
                                                    <span className="text-green-500">
                                                        &#8593;
                                                    </span>{tran.currencyIncome}{tran.totalIncome}
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                            <Card className={"pb-2"}>
                                <div className="gap-4 flex flex-col divide-y divide-gray-200">
                                    {tran.transactions.map((t: TransactionType, index) => (
                                        <TransactionRow key={index} transaction={t}/>
                                    ))}
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}