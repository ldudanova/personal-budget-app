import BalanceInfo from "../../BalanceInfoBlock/BalanceInfo.tsx";
import Card from "../../Cards/Card.tsx";
import TransactionBlock from "../../TransactionBlock/TransactionBlock.tsx";

export default function HomePage() {
    return (
        <div className="bg-gray-100 w-full h-lvh justify-center px-6 pb-8">
            <div className="container mx-auto">
                <BalanceInfo/>

                <div className="grid md:grid-cols-3 grid-cols-1 gap-6 w-full">
                    <div className="md:col-span-2">
                        <TransactionBlock/>
                    </div>
                    <div className="">
                        <Card className="max-w-lg">
                            <h3>Expenses by categories</h3>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}