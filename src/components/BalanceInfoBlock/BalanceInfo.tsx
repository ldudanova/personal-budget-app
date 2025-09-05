import BalanceInfoCardDesktop from "./BalanceInfoCardDesktop.tsx";
import type {BalanceInfoType} from "../../types/BalanceInfoType.ts";
import BalanceInfoMobile from "./BalanceInfoMobile.tsx";

export default function BalanceInfo() {

    const balanceInfos: Array<BalanceInfoType> = [
        {
            id: 1,
            name: "Balance",
            icon: "",
            amount: 1950.50,
            percent: 7,
        },
        {
            id: 2,
            name: "Income",
            icon: "↑",
            amount: 4000,
            percent: 0,
        },
        {
            id: 3,
            name: "Expenses",
            icon: "↓",
            amount: 3050.50,
            percent: -2,
        },
    ];

    return (<>
        <div className="hidden md:grid grid-cols-3 gap-5 w-full h-auto py-6 border-gray-400">
            {balanceInfos.map((balanceInfo: BalanceInfoType) => (
                    <BalanceInfoCardDesktop key={balanceInfo.id}
                                            title={balanceInfo.name}
                                            amount={balanceInfo.amount}
                                            percent={balanceInfo.percent}/>
                )
            )}
        </div>
        <div className="block md:hidden py-4">
           <BalanceInfoMobile balanceInfos={balanceInfos}/>
        </div>
    </>)
}