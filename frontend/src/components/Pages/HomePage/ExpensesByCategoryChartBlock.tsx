import {useTranslation} from "react-i18next";
import Card from "../../../UI/Cards/Card.tsx";
import ExpensesByCategoriesChart from "./ExpensesByCategoriesChart.tsx";

export default function ExpensesByCategoryChartBlock() {
    const {t} = useTranslation();

    return(<>
        <h2 className="text-2xl font-bold font-sans mb-4 px-2">{t("expenses_by_categories")}</h2>
        <Card className="max-w-lg pt-8">
            <div className={"flex justify-center relative h-fit max-h-fit lg:h-[calc(100vh-300px)] md:h-[calc(100vh-350px)]"}>
                <ExpensesByCategoriesChart/>
            </div>
        </Card>
    </>)
}