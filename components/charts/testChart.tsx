import BarChartAsync from "./BarChartAsync";

const testChartData = async () => {
    const res = await fetch("http://localhost:3000/api/track/top")
    return await res.json()
}

export default BarChartAsync(
    {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Test Chart'
            }
        }
    },
    testChartData
);