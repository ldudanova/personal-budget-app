import {useEffect} from "react";
import {format, isToday, isYesterday, parseISO} from "date-fns";
import type {TranArr, TransactionType} from "../../types/TransactionType.ts";
import {useAppDispatch, useAppSelector} from "../../store/store.ts";
import {fetchTransactions} from "../../store/transactionsSlice.ts";
import Card from "../../UI/Cards/Card.tsx";
import {TransactionRow} from "./TransactionRow.tsx";

export default function TransactionBlock() {
    const dispatch = useAppDispatch();
    const {transactionsArray, loading, error} = useAppSelector(state => state.transactions);

    useEffect(() => {
        dispatch(fetchTransactions());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    function formatTransactionDate(isoDate: string) {
        const date = parseISO(isoDate);

        if (isToday(date)) {
            return `${format(date, 'MMM d')} Today`; // "Sep 6 Today"
        }
        if (isYesterday(date)) {
            return `${format(date, 'MMM d')} Yesterday`; // "Sep 5 Yesterday"
        }

        return `${format(date, 'MMM d EEE')}`; // "Sep 4 Thu"
    }

    return (
        <>
            <h2 className="text-2xl font-bold font-sans mb-4 px-2">
                Transactions
            </h2>
            <div className="h-[calc(100vh-250px)] overflow-hidden relative">
                <div
                    className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-violet-400 scrollbar-track-gray-100 rounded-lg relative pb-8 pr-4">
                    {transactionsArray.map((tran: TranArr) => (
                        <div className={"mb-4"} key={tran.id}>
                            <div key={tran.id}
                                 className="sticky top-0 z-10 bg-gray-100 pl-2 pr-4 flex justify-between">
                                <div className="pb-2">{formatTransactionDate(tran.date)}</div>
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