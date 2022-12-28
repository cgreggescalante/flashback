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
    }
  }
};

const offsets = {
  day: 73,
  week: 52,
  month: 12,
  year: 0
};

const chartFormatters = {
  day: listeningTimeDayChart,
  week: listeningTimeWeekChart,
  month: listeningTimeMonthChart,
  year: listeningTimeYearChart
};

const tableFormatters = {
  day: listeningTimeDayTable,
  week: listeningTimeWeekTable,
  month: listeningTimeMonthTable,
  year: listeningTimeYearTable
};

const ListeningTime = () => {
  const [resolution, setResolution] = useState("week");
  const [pageIndex, setPageIndex] = useState(0);

  const handleChangeResolution = (event) => {
    setResolution(event.target.value);
    setPageIndex(0);
  };

  const { data, error } = useSWR(
    `${LISTENING_TIME}${resolution}?offset=${pageIndex * offsets[resolution]}`,
    (...args) => {
      let formatChartData = chartFormatters[resolution];
      let formatTableData = tableFormatters[resolution];

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

      <h2>Listening Time</h2>

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
