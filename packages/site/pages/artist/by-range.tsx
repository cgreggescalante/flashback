import { Chart, registerables } from "chart.js";
import { chartOptions, topArtistChart, topArtistTable } from "format-data";
import { TOP_ARTISTS } from "oracle-services";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import useSWR from "swr";

import { ArtistLayout } from "../../components/layout";
import LoadedComponent from "../../components/loadedComponent";
import Table from "../../components/table";
import SelectDate from "../../components/selectDate";

Chart.register(...registerables);

const fetcher = ({
  rangeStart,
  rangeEnd
}: {
  rangeStart: string;
  rangeEnd: string;
}) => {
  const params = {
    limit: "100"
  };

  if (rangeStart) {
    params["range_start"] = rangeStart;
  }

  if (rangeEnd) {
    params["range_end"] = rangeEnd;
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

const DataComponent = ({ data }) => (
  <>
    <Bar options={chartOptions("Top Artists")} data={data.chartData} />
    <Table data={data.tableData.data} columns={data.tableData.columns} />
  </>
);

const ByRange = () => {
  const [rangeStart, setRangeStart] = useState("");
  const [rangeEnd, setRangeEnd] = useState("");

  const { data, error } = useSWR(
    { rangeStart, rangeEnd, key: "artists" },
    fetcher
  );

  return (
    <ArtistLayout>
      Start <SelectDate setDate={setRangeStart} /> <br />
      End <SelectDate setDate={setRangeEnd} /> <br />

      <LoadedComponent data={data} error={error} component={DataComponent} />
    </ArtistLayout>
  );
};

export default ByRange;
