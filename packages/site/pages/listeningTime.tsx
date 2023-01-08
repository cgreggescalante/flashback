import { Chart, registerables } from "chart.js";
import { fetchInsights, fetchTableAndChart, INSIGHTS } from "oracle-services";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import useSWR from "swr";

import LoadedComponent from "../components/loadedComponent";
import Table from "../components/table";

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
    Yearly Max: {msToHoursMinutesSeconds(data.yearly_max)} <br />
    Yearly Average: {msToHoursMinutesSeconds(data.yearly_average)} <br /> <br />
    Monthly Max: {msToHoursMinutesSeconds(data.monthly_max)} <br />
    Monthly Average: {msToHoursMinutesSeconds(data.monthly_average)} <br />{" "}
    <br />
    Weekly Max: {msToHoursMinutesSeconds(data.weekly_max)} <br />
    Weekly Average: {msToHoursMinutesSeconds(data.weekly_average)} <br /> <br />
    Daily Max: {msToHoursMinutesSeconds(data.daily_max)} <br />
    Daily Average: {msToHoursMinutesSeconds(data.daily_average)}
  </>
);

const TableChartComponent = ({ data }) => (
  <>
    <Bar options={chartOptions} data={data.chartData} />
    <Table data={data.tableData.data} columns={data.tableData.columns} />
  </>
);

const ListeningTime = () => {
  const [resolution, setResolution] = useState("week");
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
          <option value="day">Day</option>
          <option value="week">Week</option>
          <option value="month">Month</option>
          <option value="year">Year</option>
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
