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
                        {/*        Chevron */}
                        {/*        <div className="flex items-center justify-center pl-4">
                            <div className="w-4 h-4">
                        {transaction.details
                            &&
                                    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#000000"
                                         transform="matrix(1, 0, 0, -1, 0, 0)rotate(270)">
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                           stroke-linejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier"><title>arrowhead-right</title>
                                            <g id="Layer_2" data-name="Layer 2">
                                                <g id="invisible_box" data-name="invisible box">
                                                    <rect width="48" height="48" fill="none"></rect>
                                                </g>
                                                <g id="icons_Q2" data-name="icons Q2">
                                                    <path
                                                        d="M27.2,24,16.6,34.6a1.9,1.9,0,0,0,.2,3,2.1,2.1,0,0,0,2.7-.2l11.9-12a1.9,1.9,0,0,0,0-2.8l-11.9-12a2.1,2.1,0,0,0-2.7-.2,1.9,1.9,0,0,0-.2,3Z"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>

                        }
                            </div>
                        </div>*/}
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
                        <div className="h-[calc(100vh-400px)] overflow-hidden relative">
                            <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-violet-400 scrollbar-track-gray-100 rounded-lg relative">
                                <TransactionRowDetailsTable details={transaction.details}/>
                            </div>
                        </div>
                    </div>
                )}
        </details>
    )
}