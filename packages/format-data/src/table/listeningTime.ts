import { formatTableData } from "../types";
import createTableFormat from "./createTableFormat";
import { TableColumns } from "./tableConstants";

const listeningTimeDayTable: formatTableData = createTableFormat(
  (day: any) => ({
    year: day.year_month_day.split("-")[0],
    month: day.year_month_day.split("-")[1],
    day: day.year_month_day.split("-")[2],
    value: Math.floor(day.total_ms_played / 1000 / 60)
  }),
  [TableColumns.YEAR, TableColumns.MONTH, TableColumns.DAY, TableColumns.MINUTES_PLAYED]
);

const listeningTimeWeekTable: formatTableData = createTableFormat(
  (week: any) => ({
    year: week.year_week.split("-")[0],
    week: week.year_week.split("-")[1],
    value: Math.floor(week.total_ms_played / 1000 / 60)
  }),
  [TableColumns.YEAR, TableColumns.WEEK, TableColumns.MINUTES_PLAYED]
);

const listeningTimeMonthTable: formatTableData = createTableFormat(
  (month: any) => ({
    year: month.year_month.split("-")[0],
    month: month.year_month.split("-")[1],
    value: Math.floor(month.total_ms_played / 1000 / 60)
  }),
  [TableColumns.YEAR, TableColumns.MONTH, TableColumns.MINUTES_PLAYED]
);

const listeningTimeYearTable: formatTableData = createTableFormat(
  (year: any) => ({
    year: year.year,
    value: Math.floor(year.total_ms_played / 1000 / 60)
  }),
  [TableColumns.YEAR, TableColumns.MINUTES_PLAYED]
);

export {
  listeningTimeDayTable,
  listeningTimeWeekTable,
  listeningTimeMonthTable,
  listeningTimeYearTable
};
