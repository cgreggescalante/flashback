import { Chart, registerables } from "chart.js";
import { chartOptions, topTrackChart, topTrackTable } from "format-data";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import useSWR from "swr";
import { SWRConfig } from "swr/_internal";

import LoadedComponent from "../../components/loadedComponent";
import SelectDate from "../../components/selectDate";
import Table from "../../components/table";
import { TrackAPI } from "flashback-api";

Chart.register(...registerables);

const fetcher = ({
  rangeStart,
  rangeEnd
}: {
  rangeStart: Date;
  rangeEnd: Date;
}) =>
  TrackAPI.getByPlayTime(0, 100, rangeStart, rangeEnd).then((tracks) => ({
    chartData: topTrackChart(tracks.slice(0, 10)),
    tableData: topTrackTable(tracks)
  }));

const DataComponent = ({ data }) => (
  <>
    <Bar options={chartOptions("Top Tracks")} data={data.chartData} />
    <Table data={data.tableData.data} columns={data.tableData.columns} />
  </>
);

const ByRange = () => {
  const [rangeStart, setRangeStart] = useState(new Date(0, 0));
  const [rangeEnd, setRangeEnd] = useState(new Date(9999, 0));

  const { data, error } = useSWR({ rangeStart, rangeEnd, key: "tracks" });

  return (
    <>
      Start <SelectDate setDate={setRangeStart} /> <br />
      End <SelectDate setDate={setRangeEnd} />
      <LoadedComponent data={data} error={error} component={DataComponent} />
    </>
  );
};

export default () => (
  <SWRConfig
    value={{
      revalidateOnFocus: false,
      fetcher: fetcher
    }}
  >
    <ByRange />
  </SWRConfig>
);
