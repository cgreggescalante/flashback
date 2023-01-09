import { formatChartData } from "../types";
import createChartFormat from "./createChartFormat";

const listeningTimeDayChart: formatChartData = createChartFormat(
  (day: any) => day.year_month_day,
  (day: any) => day.total_ms_played / 1000 / 60,
  "Time (minutes)"
);

const listeningTimeWeekChart: formatChartData = createChartFormat(
  (week: any) => week.year_week,
  (week: any) => week.total_ms_played / 1000 / 60,
  "Time (minutes)"
);

const listeningTimeMonthChart: formatChartData = createChartFormat(
  (month: any) => month.year_month,
  (month: any) => month.total_ms_played / 1000 / 60,
  "Time (minutes)"
);

const listeningTimeYearChart: formatChartData = createChartFormat(
  (year: any) => year.year,
  (year: any) => year.total_ms_played / 1000 / 60,
  "Time (minutes)"
);

export {
  listeningTimeDayChart,
  listeningTimeWeekChart,
  listeningTimeMonthChart,
  listeningTimeYearChart
};
