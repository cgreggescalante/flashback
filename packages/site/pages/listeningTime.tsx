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
import { LISTENING_TIME } from "oracle-services";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import useSWR from "swr";

import Table from "../components/table";

Chart.register(...registerables);

const chartOptions = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Listening Time"
    },
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
}

const ListeningTime = () => {
  const [resolution, setResolution] = useState("week");
  const [pageIndex, setPageIndex] = useState(0);

  const handleChangeResolution = (event) => {
    setResolution(event.target.value);
    setPageIndex(0);
  };

  const { data, error } = useSWR(
    `${LISTENING_TIME}${resolution}?offset=${pageIndex * resolutionConfig[resolution].offset}`,
    (...args) => {
      let formatChartData = resolutionConfig[resolution].formatChart;
      let formatTableData = resolutionConfig[resolution].formatTable;

      return fetch(...args)
        .then((res) => res.json())
        .then((data) => data.items)
        .then((data) => ({
          chartData: formatChartData(data),
          tableData: formatTableData(data)
        }));
    }
  );

  return (
    <>
      <h2>Listening Time</h2>

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

      <button disabled={pageIndex == 0} onClick={() => setPageIndex(pageIndex - 1)}>{"<"}</button>
      <button onClick={() => setPageIndex(pageIndex + 1)}>{">"}</button>

      {error ? (
        <h3>Error while retrieving data</h3>
      ) : data ? (
        <>
          <Bar options={chartOptions} data={data.chartData} />
          <Table data={data.tableData.data} columns={data.tableData.columns} />
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  );
};

export default ListeningTime;
