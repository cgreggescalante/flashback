import { Chart, registerables } from "chart.js";
import { chartOptions, topTrackChart, topTrackTable } from "format-data";
import { TOP_TRACKS } from "oracle-services";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import useSWR from "swr";

import { TrackLayout } from "../../components/layout";
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

  const request = TOP_TRACKS + new URLSearchParams(params);

  return fetch(request)
    .then((res) => res.json())
    .then((data) => data.items)
    .then((data) => ({
      chartData: topTrackChart(data.slice(0, 10)),
      tableData: topTrackTable(data)
    }));
};

const DataComponent = ({ data }) => (
  <>
    <Bar options={chartOptions("Top Tracks")} data={data.chartData} />
    <Table data={data.tableData.data} columns={data.tableData.columns} />
  </>
);

const ByRange = () => {
  const [rangeStart, setRangeStart] = useState("");
  const [rangeEnd, setRangeEnd] = useState("");

  const { data, error } = useSWR(
    { rangeStart, rangeEnd, key: "tracks" },
    fetcher
  );

  return (
    <TrackLayout>
      Start <SelectDate setDate={setRangeStart} /> <br />
      End <SelectDate setDate={setRangeEnd} />

      <LoadedComponent data={data} error={error} component={DataComponent} />
    </TrackLayout>
  );
};

export default ByRange;
