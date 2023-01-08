import { formatTableData } from "../../../types";
import createTableFormat from "../../createTableFormat";
import { MINUTES_PLAYED_COLUMN, MONTH_COLUMN, YEAR_COLUMN } from "../../tableConstants";

const processElement = (month: any) => ({
  year: month.year_month.split("-")[0],
  month: month.year_month.split("-")[1],
  value: Math.floor(month.total_ms_played / 1000 / 60)
});

const COLUMNS = [YEAR_COLUMN, MONTH_COLUMN, MINUTES_PLAYED_COLUMN];

const formatTopTracksTable: formatTableData = createTableFormat(
  processElement,
  COLUMNS
);

export default formatTopTracksTable;
