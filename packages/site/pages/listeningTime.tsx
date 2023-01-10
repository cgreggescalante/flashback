import { Chart, registerables } from "chart.js";
import { InsightAPI, ListeningTimeAPI } from "flashback-api";
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
import { INSIGHTS } from "oracle-services";
import { useState } from "react";
import useSWR from "swr";

import InsightsComponent from "../components/insight";
import LoadedComponent from "../components/loadedComponent";
import TableChartComponent from "../components/tableChart";

Chart.register(...registerables);

const resolutionConfig = [
  {
    formatChart: listeningTimeDayChart,
    formatTable: listeningTimeDayTable
  },
  {
    formatChart: listeningTimeWeekChart,
    formatTable: listeningTimeWeekTable
  },
  {
    formatChart: listeningTimeMonthChart,
    formatTable: listeningTimeMonthTable
  },
  {
    formatChart: listeningTimeYearChart,
    formatTable: listeningTimeYearTable
  }
];

const fetchInsights = async () =>
  await Promise.all([
    InsightAPI.getDaily(),
    InsightAPI.getWeekly(),
    InsightAPI.getMonthly(),
    InsightAPI.getYearly()
  ]).then((values) => ({
    daily: values[0][0],
    weekly: values[1][0],
    monthly: values[2][0],
    yearly: values[3][0]
  }));

const fetchListeningTime = async ({ resolution, pageIndex }) => {
  let promise: Promise<any>;
  let { formatChart, formatTable } = resolutionConfig[resolution];

  switch (resolution) {
    case 0: {
      promise = ListeningTimeAPI.daily(pageIndex);
      break;
    }
    case 1: {
      promise = ListeningTimeAPI.weekly(pageIndex);
      break;
    }
    case 2: {
      promise = ListeningTimeAPI.monthly(pageIndex);
      break;
    }
    case 3:
      promise = ListeningTimeAPI.yearly(0);
  }

  return await promise.then((data) => ({
    chartName: "Listening Time",
    chartData: formatChart(data),
    tableData: formatTable(data)
  }));
};

const ListeningTime = () => {
  const [resolution, setResolution] = useState(1);
  const [pageIndex, setPageIndex] = useState(0);

  const handleChangeResolution = (event) => {
    setResolution(Number.parseInt(event.target.value));
    setPageIndex(0);
  };

  const tableChart = useSWR(
    {
      resolution,
      pageIndex
    },
    fetchListeningTime
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
      <LoadedComponent
        data={tableChart.data}
        error={tableChart.error}
        component={TableChartComponent}
      />
    </>
  );
};

export default ListeningTime;
