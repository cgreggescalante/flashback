import Table from "../../components/table/table";
import {Bar} from "react-chartjs-2";
import {Chart, registerables} from "chart.js";
import {ArtistLayout} from "../../components/layout";
import topArtistsChart from "../../lib/services/artist/topArtistsChart";
import topArtistsTable from "../../lib/services/artist/topArtistsTable";
import {topArtists} from "../../lib/services/artist/by_play_time";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";

Chart.register(...registerables)

const ByRange = () => {
    const router = useRouter()
    const { range_start, range_end } = router.query

    console.log(range_start, range_end)

    let start_date = new Date('0001-01-01')
    let end_date = new Date('9999-12-31')

    if (range_start) {
        if (typeof range_start == "string") {
            start_date = new Date(range_start)
        } else {
            start_date = new Date(range_start[0])
        }
    }
    if (range_end) {
        if (typeof range_end == "string") {
            end_date = new Date(range_end)
        } else {
            end_date = new Date(range_end[0])
        }
    }

    const [chartData, setChartData] = useState(null as any)
    const [tableData, setTableData] = useState(null as any)

    useEffect(() => {
        topArtistsChart(topArtists(10, 0, start_date, end_date))
            .then(data => setChartData(data))
        topArtistsTable(topArtists(10, 0, start_date, end_date))
            .then(data => setTableData(data))

    })

    const chartOptions = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: `Top Tracks`
            }
        }
    }

    return (
        <ArtistLayout>
            <form action="by-range" method="get">
                <input type="date" id="start" name="range_start" defaultValue={range_start}/>
                <input type="date" id="end" name="range_end" defaultValue={range_end}/>
                <button type="submit">Submit</button>
            </form>

            { chartData ? (
                <Bar options={chartOptions} data={chartData.data} />
            ) : (
                <h2>Loading Chart</h2>
            )}
            { chartData ? (
                <Table data={tableData.data} columns={tableData.columns} />
            ) : (
                <h2>Loading Table</h2>
            )}

        </ArtistLayout>
    )
}

export default ByRange