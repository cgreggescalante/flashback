import { Chart, registerables } from "chart.js";
import { chartOptions, topTrackChart, topTrackTable } from "format-data";
import { topTracks } from "oracle-services";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import useSWR from "swr";
import { SWRConfig } from "swr/_internal";

import { TrackLayout } from "../../components/layout";
import LoadedComponent from "../../components/loadedComponent";
import SelectDate from "../../components/selectDate";
import Table from "../../components/table";

Chart.register(...registerables);

const fetcher = ({
  rangeStart,
  rangeEnd
}: {
  rangeStart: string;
  rangeEnd: string;
}) =>
  topTracks(100, 0, rangeStart, rangeEnd).then((tracks) => ({
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
  const [rangeStart, setRangeStart] = useState("");
  const [rangeEnd, setRangeEnd] = useState("");

  const { data, error } = useSWR({ rangeStart, rangeEnd, key: "tracks" });

  return (
    <TrackLayout>
      Start <SelectDate setDate={setRangeStart} /> <br />
      End <SelectDate setDate={setRangeEnd} />
      <LoadedComponent data={data} error={error} component={DataComponent} />
    </TrackLayout>
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
