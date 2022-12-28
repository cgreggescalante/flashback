import Table from "../../components/table";
import {Bar} from "react-chartjs-2";
import {Chart, registerables} from "chart.js";
import {topArtists} from "oracle-services";
import {ArtistLayout} from "../../components/layout";
import {topArtistChart, topArtistTable} from "format-data";

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
    const artists = await topArtists(100)

    const chartData = topArtistChart(artists.slice(0, 10))
    const { data, columns } = topArtistTable(artists)

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