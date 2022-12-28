import Table from "../../components/table";
import {Bar} from "react-chartjs-2";
import {Chart, registerables} from "chart.js";
import {ArtistLayout} from "../../components/layout";
import {topArtistChart, topArtistTable} from "format-data";
import useSWR from 'swr';
import {useState} from "react";

Chart.register(...registerables)

const URL = "https://g0cde1310ac37a5-flashback.adb.us-ashburn-1.oraclecloudapps.com/ords/client/api/artist/top?"

const chartOptions = {
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: 'Top Artists'
        }
    }
}

const ByRange = () => {
    const [rangeStart, setRangeStart] = useState("")
    const [rangeEnd, setRangeEnd] = useState("")

    const handleChangeRangeStart = (event) => {
        setRangeStart(event.target.value)
    }

    const handleChangeRangeEnd = (event) => {
        setRangeEnd(event.target.value)
    }

    const { data, mutate, error } = useSWR("-", () => {
        const params = {
            "limit": "100"
        }

        if (rangeStart) {
            params["range_start"] = `${rangeStart}T00:00:00.00Z`
        }

        if (rangeEnd) {
            params["range_end"] = `${rangeEnd}T00:00:00.00Z`
        }

        console.log(params)

        const request = URL + new URLSearchParams(params)

        return fetch(request)
            .then(res => res.json())
            .then(data => data.items)
    })

    if (error) return <h3>Failed to load data</h3>
    if (!data) return <h3>Loading...</h3>

    const chartData = topArtistChart(data.slice(0, 10))
    const tableData = topArtistTable(data)

    return (
        <ArtistLayout>
            <label>
                Start
                <input type="date" id="range_start" value={rangeStart} onChange={handleChangeRangeStart}/>
            </label>

            <br/>

            <label>
                End
                <input type="date" id="range_end" value={rangeEnd} onChange={handleChangeRangeEnd}/>
            </label>

            <br/>

            <button onClick={() => mutate()}>Submit</button>

            {
                chartData ? (
                    <Bar options={chartOptions} data={chartData} />
                ) : (
                    <h2>Loading Chart</h2>
                )
            }
            {
                tableData ? (
                    <Table data={tableData.data} columns={tableData.columns} />
                ) : (
                    <h2>Loading Table</h2>
                )
            }

        </ArtistLayout>
    )
}

export default ByRange