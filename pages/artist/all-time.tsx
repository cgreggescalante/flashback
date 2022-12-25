import Table from "../../components/table/table";
import {Bar} from "react-chartjs-2";
import {Chart, registerables} from "chart.js";
import {topArtistsAllTime} from "../../lib/services/artist/by_play_time";
import topArtistsChart from "../../lib/services/artist/topArtistsChart";
import topArtistsTable from "../../lib/services/artist/topArtistsTable";
import {ArtistLayout} from "../../components/layout";

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
    const artists = await topArtistsAllTime(100)

    const chartData = await topArtistsChart(artists.slice(0, 10))
    const { data, columns } = await topArtistsTable(artists)

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
    <ArtistLayout>
        <Bar options={chartOptions} data={chart.data} />
        <Table data={table.data} columns={table.columns} />
    </ArtistLayout>
)

export { getStaticProps }

export default AllTime