import { Chart } from "react-google-charts";

function GraficoPizza() {
    const data = [
        ["Task", "Hours per Day"],
        ["Aberto", 50],
        ["Perdido", 4],
        ["Fechado", 8],
    ];

    const options = {
        title: "Status de Oportunidades",
        colors: ["#50BEF5", "#E94040", "#45FCAD"],
        titleTextStyle: {
            fontSize: 18, // Tamanho da fonte do título
            bold: true, // Deixa o título em negrito
            fontName: "Arial", // Define a fonte do título
        },
        legend: {
            textStyle: {
                fontSize: 14, // Tamanho da fonte da legenda
                fontName: "Arial", // Fonte da legenda
            },
        },
        pieSliceTextStyle: {
            fontSize: 16, // Tamanho do texto dentro das fatias
            fontName: "Arial",
        },
        chartArea: {
            top: 65, // Aumenta o espaço entre o título e o gráfico
            width: "90%",
            height: "75%",

        },
    };

    return (
        
            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"330px"}
                height={"300px"}
                
            />
        
    );
}

export default GraficoPizza;