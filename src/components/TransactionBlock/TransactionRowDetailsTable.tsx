import type {TransactionItemType} from "../../types/TransactionItemType.ts";
import {useIsDesktop} from "../../hooks/useIsDesktop.ts";

type Props = {
    details: Array<TransactionItemType>
}

export function TransactionRowDetailsTable(props: Props) {
    const {details} = props;

    const headerTitlesDesktop = ["Name", "Category", "PPU", "Discount", "QTY", "Price"];
    const headerTitlesMobile = ["Name", "QTY", "Price"];

    const isDesktop = useIsDesktop();

    return (
        <table className="table-auto border-0 rounded-2xl border-separate  w-full">
            <thead>
                <tr>
                    {isDesktop &&
                        headerTitlesDesktop.map((el, index) => {
                            let alignmentClass = "text-center"; // по умолчанию
                            if (index === 0 || index === 1) alignmentClass = "text-left";
                            else if (index === headerTitlesDesktop.length - 1) alignmentClass = "text-right";

                            return (
                                <th key={index} className={`border-0 p-1 ${alignmentClass}`}>
                                    {el}
                                </th>
                            );
                        })}
                    {!isDesktop
                        && headerTitlesMobile.map((el, index) => (
                            <th key={index} className="border-0 text-left p-1">{el}</th>
                        ))}
                </tr>
            </thead>
            <tbody>
            {details?.map((detail, index) => (
                <tr key={index} className="border-2 border-gray-100 border-b-4">
                    {isDesktop
                        && <>
                            <td className="p-2 max-w-20">{detail.name}</td>
                            <td className="p-2">{detail.category}</td>
                            <td className="p-2 text-center">{detail.pricePerUnit}</td>
                            <td className="p-2 text-center">{detail.discount}</td>
                            <td className="p-2 text-center">{detail.qty}</td>
                            <td className="p-2 text-right">{detail.priceTotal}</td>
                        </>
                    }
                    {!isDesktop
                        && <>
                            <td className="p-2">{detail.name}</td>
                            {/*<td className="p-2">{detail.category}</td>*/}
                            <td className="p-2 text-center">{detail.qty}</td>
                            <td className="p-2 text-center">{detail.priceTotal}</td>
                        </>
                    }
                </tr>
            ))}
            </tbody>
        </table>
    )
}