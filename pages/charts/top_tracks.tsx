import topTracksTable from "../../lib/topTracksTable";
import Table from "../../components/table/table";
import {Bar} from "react-chartjs-2";
import topTracksChart from "../../lib/topTracksChart";
import {Chart, registerables} from "chart.js";

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
    const chartData = await topTracksChart()
    const { data, columns } = await topTracksTable()

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

const TopTracks = (
    { table, chart } : { table: any, chart: any }
) => (
    <>
        <Bar options={chartOptions} data={chart.data} />
        <Table data={table.data} columns={table.columns} />
    </>
)

export { getStaticProps }

export default TopTracks