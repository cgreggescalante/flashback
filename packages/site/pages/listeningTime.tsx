import { Chart, registerables } from "chart.js";
import { fetchTableAndChart, INSIGHTS } from "oracle-services";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import useSWR from "swr";

import LoadedComponent from "../components/loadedComponent";
import Table from "../components/table";
import { InsightAPI } from "flashback-api";

Chart.register(...registerables);

const chartOptions = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Listening Time"
    }
  }
};

const msToHoursMinutesSeconds = (ms: number) => {
  const hours = Math.floor(ms / 1000 / 60 / 60);
  ms -= hours * 1000 * 60 * 60;
  const minutes = Math.floor(ms / 1000 / 60);
  ms -= minutes * 1000 * 60;
  const seconds = Math.floor(ms / 1000);
  return `${hours} hour${
    hours > 1 || hours == 0 ? "s" : ""
  }, ${minutes} minute${
    minutes > 1 || minutes == 0 ? "s" : ""
  }, ${seconds} second${seconds > 1 || seconds == 0 ? "s" : ""}`;
};

const InsightsComponent = ({ data }) => (
  <>
    Yearly Max: {msToHoursMinutesSeconds(data.yearly.maximum)} <br />
    Yearly Average: {msToHoursMinutesSeconds(data.yearly.average)} <br />
    <br />
    Monthly Max: {msToHoursMinutesSeconds(data.monthly.maximum)} <br />
    Monthly Average: {msToHoursMinutesSeconds(data.monthly.average)} <br />
    <br />
    Weekly Max: {msToHoursMinutesSeconds(data.weekly.maximum)} <br />
    Weekly Average: {msToHoursMinutesSeconds(data.weekly.average)} <br />
    <br />
    Daily Max: {msToHoursMinutesSeconds(data.daily.maximum)} <br />
    Daily Average: {msToHoursMinutesSeconds(data.daily.average)}
  </>
);

const fetchInsights = async () =>
  await Promise.all([InsightAPI.getDaily(), InsightAPI.getWeekly(), InsightAPI.getMonthly(), InsightAPI.getYearly()])
    .then(values => ({
      daily: values[0][0],
      weekly: values[1][0],
      monthly: values[2][0],
      yearly: values[3][0]
    }));

const TableChartComponent = ({ data }) => (
  <>
    <Bar options={chartOptions} data={data.chartData} />
    <Table data={data.tableData.data} columns={data.tableData.columns} />
  </>
);

const ListeningTime = () => {
  const [resolution, setResolution] = useState(1);
  const [pageIndex, setPageIndex] = useState(0);

  const handleChangeResolution = (event) => {
    setResolution(event.target.value);
    setPageIndex(0);
  };

  const tableChart = useSWR(
    {
      resolution,
      pageIndex
    },
    fetchTableAndChart
  );

  const insights = useSWR(INSIGHTS, fetchInsights);

  return (
    <>
      <h2>Listening Time</h2>
      <LoadedComponent
        data={insights.data}
        error={insights.error}
        component={InsightsComponent}
      />
      <br /> <br />
      <label>
        Resolution
        <select value={resolution} onChange={handleChangeResolution}>
          <option value={0}>Day</option>
          <option value={1}>Week</option>
          <option value={2}>Month</option>
          <option value={3}>Year</option>
        </select>
      </label>
      <br />
      <button
        disabled={pageIndex == 0}
        onClick={() => setPageIndex(pageIndex - 1)}
      >
        {"<"}
      </button>
      <button onClick={() => setPageIndex(pageIndex + 1)}>{">"}</button>
      <br />
      <LoadedComponent data={tableChart.data} error={tableChart.error} component={TableChartComponent} />
    </>
  );
};

export default ListeningTime;
