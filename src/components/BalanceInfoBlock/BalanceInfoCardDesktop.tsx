import {useTranslation} from "react-i18next";
import Card from "../../UI/Cards/Card.tsx";

type Props = {
    title: string,
    amount: number,
    percent: number,
    currency: string,
}

export default function BalanceInfoCardDesktop(props: Props) {
    const {title, amount, percent, currency} = props
    const {t} = useTranslation();

    return (
        <Card className="max-w-lg">
            <div className="flex justify-between items-center mb-3">
                <div className="text-2xl">{t(title)}</div>
                <div className="text-xs">{percent > 0? '+' : ''}{percent}%</div>
            </div>
            <div className="mb-1 text-xl font-bold font-sans">
                {currency} {amount.toFixed(2)}
            </div>
            <div className="text-xs">

            </div>
        </Card>
    )
}