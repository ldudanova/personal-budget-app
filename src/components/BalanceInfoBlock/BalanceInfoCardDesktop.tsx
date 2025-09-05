import Card from "../Cards/Card.tsx";

type Props = {
    title: string,
    amount: number,
    percent: number,
}

export default function BalanceInfoCardDesktop(props: Props) {
    const {title, amount, percent} = props
    return (
        <Card className="max-w-lg">
            <div className="flex justify-between items-center mb-3">
                <div className="text-2xl">{title}</div>
                <div className="text-xs">{percent > 0? '+' : ''}{percent}%</div>
            </div>
            <div className="mb-1 text-xl font-bold font-sans">
                $ {amount.toFixed(2)}
            </div>
            <div className="text-xs">

            </div>
        </Card>
    )
}