import Table from "../../../components/table/table";
import {Bar} from "react-chartjs-2";
import {Chart, registerables} from "chart.js";
import topArtistsTable from "../../../lib/services/artist/topArtistsTable";
import {topArtistsByYear} from "../../../lib/services/artist/by_play_time";
import {TrackByYearLayout, TrackLayout} from "../../../components/layout";

Chart.register(...registerables)

const getStaticPaths = () => ({
    paths: [{ params: { year: "2019" }}, { params: { year: "2020" }}, { params: { year: "2021" }}, { params: { year: "2022" }}],
    fallback: false
})

const getStaticProps = async ({ params }: { params: any }) => {
    const year = Number.parseInt(params.year)
    const chartData = await topArtistsTable(topArtistsByYear(year))
    const { data, columns } = await topArtistsTable(topArtistsByYear(year, 50))

    const chartOptions = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: `Top Artists - ${params.year}`
            }
        }
    }

    return { props: {
            table: {
                data,
                columns
            },
            chart: {
                data: chartData,
                options: chartOptions
            }
        }
    }
}

const ByYear = (
    { table, chart } : { table: any, chart: any }
) => (
    <TrackLayout>
        <TrackByYearLayout>
            <Bar options={chart.options} data={chart.data} />
            <Table data={table.data} columns={table.columns} />
        </TrackByYearLayout>
    </TrackLayout>
)

export { getStaticPaths, getStaticProps }

export default ByYear