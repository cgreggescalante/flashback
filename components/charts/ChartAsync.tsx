import {useQuery} from "react-query";
import {Chart, registerables} from 'chart.js';

Chart.register(...registerables)

const ChartAsync = (chartType: Function) => (chartOptions: {}, getChartData: () => Promise<any>) => {
    const Chart = () => {
        const { data, error, isError, isLoading } = useQuery('chartData', getChartData)

        return (
            <>
                { isError ? (
                    <div>Error</div>
                ) : isLoading ? (
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                ) : (
                    <>
                        { chartType(chartOptions, data) }
                    </>
                )}
            </>
        )
    }

    return Chart
}

export default ChartAsync;
