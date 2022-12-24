import Table from "../../components/table/table";
import {Bar} from "react-chartjs-2";
import {Chart, registerables} from "chart.js";
import topArtistsTable from "../../lib/services/artist/topArtistsTable";
import topArtistsChart from "../../lib/services/artist/topArtistsChart";
import {topArtistsAllTime} from "../../lib/services/artist/by_play_time";

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
    const chartData = await topArtistsChart(topArtistsAllTime)
    const { data, columns } = await topArtistsTable()

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
    <>
        <Bar options={chartOptions} data={chart.data} />
        <Table data={table.data} columns={table.columns} />
    </>
)

export { getStaticProps }

export default AllTime