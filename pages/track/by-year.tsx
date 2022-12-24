import Table from "../../components/table/table";
import {Bar} from "react-chartjs-2";
import {Chart, registerables} from "chart.js";
import topTracksChart from "../../lib/services/track/topTracksChart";
import topTracksTable from "../../lib/services/track/topTracksTable";
import Layout from "../../components/track/layout";
import {topTracksByYear} from "../../lib/services/track/by_play_time";

Chart.register(...registerables)

const chartOptions = {
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: 'Top Tracks - 2022'
        }
    }
}

const getStaticProps = async () => {
    const chartData = await topTracksChart(topTracksByYear(2022))
    const { data, columns } = await topTracksTable(topTracksByYear(2022, 50))

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

const ByYear = (
    { table, chart } : { table: any, chart: any }
) => (
    <Layout>
        <Bar options={chartOptions} data={chart.data} />
        <Table data={table.data} columns={table.columns} />
    </Layout>
)

export { getStaticProps }

export default ByYear