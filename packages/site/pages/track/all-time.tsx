import Table from "../../components/table/table";
import {Bar} from "react-chartjs-2";
import {Chart, registerables} from "chart.js";
import {topTracksAllTime} from "services";
import {TrackLayout} from "../../components/layout";
import {topTrackChart, topTrackTable} from "format-data";

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
    const tracks = await topTracksAllTime(100)

    const chartData = topTrackChart(tracks.slice(0, 10))
    const { data, columns } = topTrackTable(tracks)

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