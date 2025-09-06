import {Doughnut} from "react-chartjs-2";
import {Chart as ChartJS, ArcElement, Legend, Tooltip} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ExpensesByCategoriesChart() {
    const categories = [
        {
            id: 101,
            name: "Food",
            totalAmount: 456,
        },
        {
            id: 102,
            name: "Cafe",
            totalAmount: 68,
        },
        {
            id: 103,
            name: "Transport",
            totalAmount: 20,
        },
        {
            id: 104,
            name: "Rent",
            totalAmount: 1827,
        },
        {
            id: 105,
            name: "Health and Beauty",
            totalAmount: 50,
        },
        {
            id: 106,
            name: "Internet",
            totalAmount: 38,
        },
        {
            id: 107,
            name: "Alcohol",
            totalAmount: 50,
        },
        {
            id: 108,
            name: "Cigarettes",
            totalAmount: 32,
        },
        {
            id: 109,
            name: "Cat",
            totalAmount: 22,
        },
        {
            id: 110,
            name: "Mobile",
            totalAmount: 44,
        },
    ]

    function groupTopCategories(
        data: { id: number, name: string; totalAmount: number }[],
        topN = 5
    ) {
        // сортируем по убыванию
        const sorted = [...data].sort((a, b) => b.totalAmount - a.totalAmount);

        // берём топ N
        const top = sorted.slice(0, topN);

        // считаем остаток
        const rest = sorted.slice(topN);
        if (rest.length > 0) {
            const otherSum = rest.reduce((sum, item) => sum + item.totalAmount, 0);
            top.push({id: 0, name: "Остальное", totalAmount: otherSum });
        }

        return top;
    }

    const groupedData = groupTopCategories(categories, 5);

    const data = {
        labels: groupedData.map((item) => item.name),
        datasets: [
            {
                label: '€',
                data: groupedData.map((item) => item.totalAmount),
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
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
                formatter: (value: number, context: any) => {
                    const dataArr = context.chart.data.datasets[0].data;
                    const total = dataArr.reduce((a: number, b: number) => a + b, 0);
                    return ((value / total) * 100).toFixed(1) + "%";
                },
            },
        },
        // 🔹 Обработка клика
        onClick: (_: any, elements: any[]) => {
            if (!elements.length) return;
            const chart = elements[0];
            const label = data.labels[chart.index];

            alert(label)
            if (label === "Остальное") {
            //     TODO: сделать переход на график с остальными тратами: отобразить тут же или перейти на другую страницу?
            }
        },
        onHover: (event: any, element: any) => {
            if(element.length === 1) {
                event.native.target.style.cursor = "pointer";
            }
            if(element.length === 0) {
                event.native.target.style.cursor = "default";
            }
        }
    };

    const centerTextPlugin = {
        id: "centerText",
        beforeDraw: (chart: any) => {
            const { ctx } = chart;
            ctx.save();

            // Берём геометрию первой дуги
            const meta = chart.getDatasetMeta(0);
            if (!meta || !meta.data || !meta.data[0]) return;

            const arc = meta.data[0];
            const { x, y } = arc.getProps(["x", "y"], true); // центр пончика

            // Считаем сумму
            const total = chart.data.datasets[0].data.reduce(
                (a: number, b: number) => a + b,
                0
            );
            const text = `€${total}`;

            // Настройки текста
            ctx.font = "bold 2em Arial"; //TODO: сделать размер текста адаптивным
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