import Table from "../../components/table/table";
import {Bar} from "react-chartjs-2";
import {Chart, registerables} from "chart.js";
import {topArtistsAllTime} from "../../lib/services/artist/by_play_time";
import topArtistsChart from "../../lib/services/artist/topArtistsChart";
import topArtistsTable from "../../lib/services/artist/topArtistsTable";
import {TrackLayout} from "../../components/layout";

Chart.register(...registerables)

const chartOptions = {
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: 'Top Artists - All Time'
        }
    }
}

const getStaticProps = async () => {
    const chartData = await topArtistsChart(topArtistsAllTime(10))
    const { data, columns } = await topArtistsTable(topArtistsAllTime(100))

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