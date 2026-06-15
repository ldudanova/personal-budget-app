type Props = {
    children?: React.ReactNode,
    className?: string,
}

export default function Card(props: Props) {
    const {children, className} = props;

    return (
        <div className={`${className} bg-white rounded-2xl p-4  w-full inset-shadow-sm`}>
            {children}
        </div>
    )
}