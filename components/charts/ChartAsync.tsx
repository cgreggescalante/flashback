import {useState} from "react";
import {Chart, registerables} from 'chart.js';

Chart.register(...registerables)

const ChartAsync = (chartType: Function) => (chartOptions: {}, getChartData: Function) => {
    const Chart = () => {
        const [state, setState] = useState({
            error: null as any,
            isLoaded: false,
            data: null as any
        })

        getChartData()
            .then(
                (data: {}) => setState({...state, data, isLoaded: true}),
                (error: {}) => setState({...state, error, isLoaded: true}))

        return (
            <>
                { state.error ? (
                    <div>Error: {state.error.message}</div>
                ) : state.isLoaded ? (
                    <>
                        <p>{ state.isLoaded ? "true" : "false" }</p>
                        { chartType(chartOptions, state.data) }
                    </>
                ) : (
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                )}
            </>
        )
    }

    return Chart
}

export default ChartAsync;
