import Card from "../Cards/Card.tsx";
import type {BalanceInfoType} from "../../types/BalanceInfoType.ts";

type Props = {
    balanceInfos: Array<BalanceInfoType>,
}

export default function BalanceInfoMobile(props: Props) {
    const {balanceInfos} = props

    return (
        <Card className="flex justify-between divide-x divide-gray-300 px-0">
            {balanceInfos.map((balanceInfo: BalanceInfoType) => (
                <div className="flex-1 px-4"
                     key={balanceInfo.id}>
                    <div className="font-bold text-gray-400 text-center">
                        {balanceInfo.name}
                    </div>
                    <div className="text-center font-bold">
                        ${balanceInfo.amount}
                    </div>
                </div>
            ))}
        </Card>
    )
}