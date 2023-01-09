import { INSIGHTS, LISTENING_TIME } from "../uris";
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

const resolutionConfig = [
  {
    offset: 73,
    formatChart: listeningTimeDayChart,
    formatTable: listeningTimeDayTable
  },
  {
    offset: 52,
    formatChart: listeningTimeWeekChart,
    formatTable: listeningTimeWeekTable
  },
  {
    offset: 12,
    formatChart: listeningTimeMonthChart,
    formatTable: listeningTimeMonthTable
  },
  {
    offset: 0,
    formatChart: listeningTimeYearChart,
    formatTable: listeningTimeYearTable
  }
];

export const fetchTableAndChart = ({
  resolution,
  pageIndex
}: {
  resolution: number;
  pageIndex: number;
}) => {
  let formatChartData = resolutionConfig[resolution].formatChart;
  let formatTableData = resolutionConfig[resolution].formatTable;

  let resolutionString = ["day", "week", "month", "year"][resolution]

  const url = `${LISTENING_TIME}${resolutionString}?offset=${
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

export const fetchInsights = () => {
  return fetch(INSIGHTS)
    .then((res) => res.json())
    .then((data) => data.items[0]);
};