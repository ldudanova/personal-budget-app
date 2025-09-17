import BalanceInfo from "../../BalanceInfoBlock/BalanceInfo.tsx";
import Card from "../../../UI/Cards/Card.tsx";
import TransactionBlock from "../../TransactionBlock/TransactionBlock.tsx";
import ExpensesByCategoriesChart from "./ExpensesByCategoriesChart.tsx";

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
                        <h2 className="text-2xl font-bold font-sans mb-4 px-2">Expenses by categories</h2>
                        <Card className="max-w-lg pt-8">
                            <div className={"flex justify-center relative h-fit max-h-fit lg:h-[calc(100vh-300px)] md:h-[calc(100vh-350px)]"}>
                                <ExpensesByCategoriesChart/>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}