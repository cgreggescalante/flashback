import { Chart, registerables } from "chart.js";
import { topArtistChart, topArtistTable } from "format-data";
import { TOP_ARTISTS } from "oracle-services";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import useSWR from "swr";

import { ArtistLayout } from "../../components/layout";
import Table from "../../components/table";

Chart.register(...registerables);

const chartOptions = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Top Artists"
    }
  }
};

const fetcher = ({ rangeStart, rangeEnd }: { rangeStart: string, rangeEnd: string }) => {
  const params = {
    limit: "100"
  };

  if (rangeStart) {
    params["range_start"] = `${rangeStart}T00:00:00.00Z`;
  }

  if (rangeEnd) {
    params["range_end"] = `${rangeEnd}T00:00:00.00Z`;
  }

  const request = TOP_ARTISTS + new URLSearchParams(params);

  return fetch(request)
    .then((res) => res.json())
    .then((data) => data.items)
    .then((data) => ({
      chartData: topArtistChart(data.slice(0, 10)),
      tableData: topArtistTable(data)
    }));
};

const ByRange = () => {
  const [rangeStart, setRangeStart] = useState("");
  const [rangeEnd, setRangeEnd] = useState("");

  const handleChangeRangeStart = (event) => {
    setRangeStart(event.target.value);
  };

  const handleChangeRangeEnd = (event) => {
    setRangeEnd(event.target.value);
  };

  const { data, error } = useSWR(
    { rangeStart, rangeEnd, key: "artists" },
    fetcher
  );

  return (
    <ArtistLayout>
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

      {error ? (
        <h3>Failed to load data</h3>
      ) : data ? (
        <>
          <Bar options={chartOptions} data={data.chartData} />
          <Table data={data.tableData.data} columns={data.tableData.columns} />
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </ArtistLayout>
  );
};

export default ByRange;
