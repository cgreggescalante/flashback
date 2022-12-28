import { Chart, registerables } from "chart.js";
import { topTrackChart, topTrackTable } from "format-data";
import { TOP_TRACKS } from "oracle-services";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import useSWR from "swr";

import { TrackLayout } from "../../components/layout";
import Table from "../../components/table";

Chart.register(...registerables);

const chartOptions = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Top Tracks"
    }
  }
};

const ByRange = () => {
  const [rangeStart, setRangeStart] = useState("");
  const [rangeEnd, setRangeEnd] = useState("");

  const handleChangeRangeStart = (event) => setRangeStart(event.target.value);

  const handleChangeRangeEnd = (event) => setRangeEnd(event.target.value);

  const { data, mutate, error } = useSWR("-", () => {
    const params = {
      limit: "100"
    };

    if (rangeStart) {
      params["range_start"] = `${rangeStart}T00:00:00.00Z`;
    }

    if (rangeEnd) {
      params["range_end"] = `${rangeEnd}T00:00:00.00Z`;
    }

    const request = TOP_TRACKS + new URLSearchParams(params);

    return fetch(request)
      .then((res) => res.json())
      .then((data) => data.items);
  });

  if (error) return <h3>Failed to load data</h3>;
  if (!data) return <h3>Loading...</h3>;

  const chartData = topTrackChart(data.slice(0, 10));
  const tableData = topTrackTable(data);

  return (
    <TrackLayout>
      <label>
        Start
        <input
          type="date"
          id="range_start"
          value={rangeStart}
          onChange={handleChangeRangeStart}
        />
      </label>

      <br />

      <label>
        End
        <input
          type="date"
          id="range_end"
          value={rangeEnd}
          onChange={handleChangeRangeEnd}
        />
      </label>

      <br />

      <button onClick={() => mutate()}>Submit</button>

      <Bar options={chartOptions} data={chartData} />
      <Table data={tableData.data} columns={tableData.columns} />
    </TrackLayout>
  );
};

export default ByRange;
