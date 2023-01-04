import { Chart, registerables } from "chart.js";
import {
  listeningTimeDayChart,
  listeningTimeDayTable,
  listeningTimeMonthChart,
  listeningTimeMonthTable,
  listeningTimeWeekChart,
  listeningTimeWeekTable,
  listeningTimeYearChart,
  listeningTimeYearTable
} from "format-data";
import { INSIGHTS, LISTENING_TIME } from "oracle-services";
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

const resolutionConfig = {
  day: {
    offset: 73,
    formatChart: listeningTimeDayChart,
    formatTable: listeningTimeDayTable
  },
  week: {
    offset: 52,
    formatChart: listeningTimeWeekChart,
    formatTable: listeningTimeWeekTable
  },
  month: {
    offset: 12,
    formatChart: listeningTimeMonthChart,
    formatTable: listeningTimeMonthTable
  },
  year: {
    offset: 0,
    formatChart: listeningTimeYearChart,
    formatTable: listeningTimeYearTable
  }
};

const fetchTableAndChart = ({
  resolution,
  pageIndex
}: {
  resolution: string;
  pageIndex: number;
}) => {
  let formatChartData = resolutionConfig[resolution].formatChart;
  let formatTableData = resolutionConfig[resolution].formatTable;

  const url = `${LISTENING_TIME}${resolution}?offset=${
    pageIndex * resolutionConfig[resolution].offset
  }`;

  return fetch(url)
    .then((res) => res.json())
    .then((data) => data.items)
    .then((data) => ({
      chartData: formatChartData(data),
      tableData: formatTableData(data)
    }));
};

const fetchInsights = () => {
  return fetch(INSIGHTS)
    .then((res) => res.json())
    .then((data) => data.items[0]);
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

const ChartComponent = ({ data }) => (
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

  const { data, error } = useSWR(
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
      <LoadedComponent data={data} error={error} component={ChartComponent} />
    </>
  );
};

export default ListeningTime;
