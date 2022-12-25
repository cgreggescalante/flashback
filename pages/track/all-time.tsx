import Table from "../../components/table/table";
import {Bar} from "react-chartjs-2";
import {Chart, registerables} from "chart.js";
import topTracksChart from "../../lib/services/track/topTracksChart";
import topTracksTable from "../../lib/services/track/topTracksTable";
import {topTracksAllTime} from "../../lib/services/track/by_play_time";
import {TrackLayout} from "../../components/layout";

Chart.register(...registerables)

const chartOptions = {
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: 'Top Tracks - All Time'
        }
    }
}

const getStaticProps = async () => {
    const chartData = await topTracksChart(topTracksAllTime(10))
    const { data, columns } = await topTracksTable(topTracksAllTime(100))

    return { props: {
            table: {
                data,
                columns
            },
            chart: {
                data: chartData
            }
        }
    }
}

const AllTime = (
    { table, chart } : { table: any, chart: any }
) => (
    <TrackLayout>
        <Bar options={chartOptions} data={chart.data} />
        <Table data={table.data} columns={table.columns} />
    </TrackLayout>
)

export { getStaticProps }

export default AllTime