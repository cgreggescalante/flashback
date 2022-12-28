import { formatTableData } from "../../../types";
import createTableFormat from "../../createTableFormat";
import { DAY_COLUMN, MINUTES_PLAYED_COLUMN, MONTH_COLUMN, YEAR_COLUMN } from "../../table_constants";

const processElement = (day: any) => ({
  year: day.year_month_day.split("-")[0],
  month: day.year_month_day.split("-")[1],
  day: day.year_month_day.split("-")[2],
  value: Math.floor(day.total_ms_played / 1000 / 60)
});

const COLUMNS = [YEAR_COLUMN, MONTH_COLUMN, DAY_COLUMN, MINUTES_PLAYED_COLUMN];

const formatTopTracksTable: formatTableData = createTableFormat(
  processElement,
  COLUMNS
);

export default formatTopTracksTable;
