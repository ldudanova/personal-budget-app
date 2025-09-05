import type {TransactionType} from "../../types/TransactionType.ts";

type Props = {
    transaction: TransactionType;
}

export function TransactionRow(props: Props) {
    const {transaction} = props;
    return (
        <div className="px-2 pt-1 pb-3 flex justify-between">
            <div className="flex justify-between items-center">
                <div
                    className={`mr-2 rounded-full bg-${transaction.iconColor} h-8 w-8 p-1 align-middle text-center`}>
                    !
                </div>
                <span>{transaction.name}</span>
            </div>
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
    )
}