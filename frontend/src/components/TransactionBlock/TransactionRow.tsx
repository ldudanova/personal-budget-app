import type {TransactionType} from "../../types/TransactionType.ts";
import {TransactionRowDetailsTable} from "./TransactionRowDetailsTable.tsx";

type Props = {
    transaction: TransactionType;
}

export function TransactionRow(props: Props) {
    const {transaction} = props;
    return (
        <details className="px-2 pt-1 pb-3 open:bg-gray-50">
            <summary
                className={transaction.details
                    ? "cursor-pointer hover:text-blue-900"
                    : "" + "no-marker transition-text"}>
                <div className=" flex justify-between">
                    <div className="flex justify-between items-center">
                        <div
                            className={`mr-2 rounded-full bg-${transaction.iconColor} h-8 w-8 p-1 align-middle text-center`}>
                            !
                        </div>
                        <span>{transaction.name}</span>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <span>
                              {transaction.type === "expense"
                                  ? `-${transaction.currency}${transaction.amount}`
                                  : `+${transaction.currency}${transaction.amount}`}
                            </span>
                            {transaction.budgetLeft
                                && (<div className={transaction.budgetLeft >= 0
                                    ? `text-gray-300 text-xs text-right`
                                    : `text-red-800 opacity-40 text-xs text-right`
                                }>
                                    {transaction.budgetLeft > 0
                                        ? `${transaction.currency}${transaction.budgetLeft}`
                                        : `-${transaction.currency}${-(transaction.budgetLeft)}`}
                                </div>)}
                        </div>
                    </div>
                </div>
                {!!transaction.details && transaction.details.length > 0
                    && (
                        <div className="text-xs text-gray-300 ml-10">Подробнее</div>
                    )}
            </summary>
            {!!transaction.details && transaction.details.length > 0
                && (
                    <div className="pl-3 pt-2">
                        {/*TODO: подумать как лучше оформить скролл таблицы */}
                        <div className="h-[calc(100vh-500px)] overflow-hidden relative">
                            <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-violet-400 scrollbar-track-gray-100 rounded-lg relative">
                                <TransactionRowDetailsTable details={transaction.details}/>
                            </div>
                        </div>
                    </div>
                )}
        </details>
    )
}