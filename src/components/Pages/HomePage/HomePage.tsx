import BalanceInfo from "../../BalanceInfoBlock/BalanceInfo.tsx";
import TransactionBlock from "../../TransactionBlock/TransactionBlock.tsx";
import ExpensesByCategoryChartBlock from "./ExpensesByCategoryChartBlock.tsx";

export default function HomePage() {
    return (
        <div className=" w-full h-full justify-center px-6 pb-8">
            <div className="container mx-auto">
                <BalanceInfo/>

                <div className="grid md:grid-cols-3 grid-cols-1 gap-6 w-full">
                    <div className="md:col-span-2">
                        <TransactionBlock/>
                    </div>
                    <div>
                        <ExpensesByCategoryChartBlock/>
                    </div>
                </div>
            </div>
        </div>
    )
}