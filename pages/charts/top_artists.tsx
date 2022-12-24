import Table from "../../components/table/table";
import {Bar} from "react-chartjs-2";
import {Chart, registerables} from "chart.js";
import topArtistsChart from "../../lib/topArtistsChart";
import topArtistsTable from "../../lib/topArtistsTable";

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
    const chartData = await topArtistsChart()
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

const TopArtists = (
    { table, chart } : { table: any, chart: any }
) => (
    <>
        <Bar options={chartOptions} data={chart.data} />
        <Table data={table.data} columns={table.columns} />
    </>
)

export { getStaticProps }

export default TopArtists