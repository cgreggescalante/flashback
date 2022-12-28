import { MINUTES_PLAYED_COLUMN, WEEK_COLUMN, YEAR_COLUMN } from "../../table_constants";
import createTableFormat from "../../createTableFormat";
import { formatTableData } from "../../../types";

const processElement = (week: any) => ({
    year: week.year_week.split("-")[0],
    week: week.year_week.split("-")[1],
    value: Math.floor(week.total_ms_played / 1000 / 60)
})

const COLUMNS = [
  YEAR_COLUMN,
  WEEK_COLUMN,
  MINUTES_PLAYED_COLUMN
];

const formatTopTracksTable: formatTableData = createTableFormat(processElement, COLUMNS);

export default formatTopTracksTable;