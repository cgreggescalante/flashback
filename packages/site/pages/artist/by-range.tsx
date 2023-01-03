import { Chart, registerables } from "chart.js";
import { chartOptions, topArtistChart, topArtistTable } from "format-data";
import { topArtists } from "oracle-services";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import useSWR from "swr";

import { ArtistLayout } from "../../components/layout";
import LoadedComponent from "../../components/loadedComponent";
import Table from "../../components/table";
import SelectDate from "../../components/selectDate";
import { SWRConfig } from "swr/_internal";

Chart.register(...registerables);

const fetcher = ({
  rangeStart,
  rangeEnd
}: {
  rangeStart: string;
  rangeEnd: string;
}) => topArtists(100, 0, rangeStart, rangeEnd)
  .then(artists => ({
    chartData: topArtistChart(artists.slice(0, 10)),
    tableData: topArtistTable(artists)
  }))

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

export default () => (
  <SWRConfig value={{
    revalidateOnFocus: false,
    fetcher: fetcher
  }}>
    <ByRange />
  </SWRConfig>
);
