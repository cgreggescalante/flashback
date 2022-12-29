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

const fetcher = ({
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

const DataComponent = ({ data }) => (
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
    fetcher
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

      <button
        disabled={pageIndex == 0}
        onClick={() => setPageIndex(pageIndex - 1)}
      >
        {"<"}
      </button>
      <button onClick={() => setPageIndex(pageIndex + 1)}>{">"}</button>

      <LoadedComponent data={data} error={error} component={DataComponent} />
    </>
  );
};

export default ListeningTime;
