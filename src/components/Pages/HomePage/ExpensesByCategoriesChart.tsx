import {useEffect} from "react";
import {Doughnut} from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Legend,
    Tooltip,
    Chart,
    type ChartEvent,
    type ActiveElement,
    type TooltipItem
} from "chart.js";
import {useAppDispatch, useAppSelector} from "../../../store/store.ts";
import {type CategoriesSpentTotal, fetchCategoriesSpentTotal} from "../../../store/categoriesSlice.ts";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ExpensesByCategoriesChart() {
    const dispatch = useAppDispatch();
    const {categoriesSpentTotal, loading, error} = useAppSelector(state => state.categoriesSpentTotal);

    useEffect(() => {
        dispatch(fetchCategoriesSpentTotal());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const groupedData = groupTopCategories(categoriesSpentTotal, 5);


    function groupTopCategories(
        data: CategoriesSpentTotal[],
        topN = 5
    ) {
        // сортируем по убыванию
        const sorted = [...data].sort((a, b) => b.amount - a.amount);

        // берём топ N
        const top = sorted.slice(0, topN);

        // считаем остаток
        const rest = sorted.slice(topN);


        if (rest.length > 0) {
            const otherSum = rest.reduce((sum, item) => sum + item.amount, 0);
           //TODO: currency, color
            top.push({id: 0, name: "Остальное", amount: otherSum, currency: "", color: "#ffb700" });
        }

        return top;
    }


    const data = {
        labels: groupedData.map((item) => item.name),
        datasets: [
            {
                //TODO: решить вопрос с label и валютой
                label: groupedData[0]?.currency || "",
                data: groupedData.map((item) => item.amount),
                backgroundColor: groupedData.map((item) => item.color),
                borderWidth: 1,         // без белых границ
                borderRadius: 8,       // скругленные углы
                spacing: 3,             // промежутки между секторами
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                position: "bottom" as const,
                labels: {
                    usePointStyle: true,
                    pointStyle: "circle", // можно ещё 'rectRounded', 'triangle', 'star'
                },
                maxHeight: 100,
            },
            datalabels: {
                color: "#fff",
                font: {
                    weight: "bold" as const,
                    size: 14,
                },
            },
            tooltip: {
                callbacks: {
                    label: function (
                        context: TooltipItem<"doughnut"> // <-- нормальный тип
                    ): string {
                        const dataset = context.dataset.data;
                        const total = dataset.reduce((a: number, b: number) => a + b, 0);
                        const value = context.raw as number;
                        const percentage = ((value / total) * 100).toFixed(1);
                        return `${value} (${percentage}%)`;
                    },
                },
            },
        },
        // 🔹 Обработка клика
        onClick: (_event:ChartEvent, elements: ActiveElement[]) => {
            if (!elements.length) return;
            const chart = elements[0];
            const label = data.labels[chart.index];

            alert(label)
            if (label === "Остальное") {
            //     TODO: сделать переход на график с остальными тратами: отобразить тут же или перейти на другую страницу?
            }
        },
        onHover: (event: ChartEvent, elements: ActiveElement[]) => {
            const target = event.native?.target as HTMLElement;
            if (!target) return;
            target.style.cursor = elements.length === 1 ? "pointer" : "default";
        },
    };

    const centerTextPlugin = {
        id: "centerText",
        beforeDraw: (chart: Chart<"doughnut">) => {
            const { ctx } = chart;
            ctx.save();

            // Берём геометрию первой дуги
            const meta = chart.getDatasetMeta(0);
            if (!meta || !meta.data || !meta.data[0]) return;

            const arc = meta.data[0];
            const { x, y, innerRadius } = arc.getProps(
                ["x", "y", "innerRadius", "outerRadius"],
                true
            ); // центр пончика

            // Считаем сумму
            const total = chart.data.datasets[0].data.reduce(
                (a: number, b: number) => a + b,
                0
            );
            const text = `€${total}`;

            // Настройки текста
            let fontSize = innerRadius * 0.5;
            ctx.font = `bold ${fontSize}px Arial`;
            while (ctx.measureText(text).width > innerRadius * 1.8 && fontSize > 10) {
                fontSize -= 1;
                ctx.font = `bold ${fontSize}px Arial`;
            }
            ctx.fillStyle = "#111";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";

            ctx.fillText(text, x, y);
            ctx.restore();
        },
    };

    return (
        <Doughnut data={data}
                  options={options}
                  plugins={[centerTextPlugin]}/>
    )
}