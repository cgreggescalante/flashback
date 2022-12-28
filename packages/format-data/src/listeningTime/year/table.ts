import { MINUTES_PLAYED_COLUMN, YEAR_COLUMN } from "../../table_constants";
import createTableFormat from "../../createTableFormat";
import { formatTableData } from "../../../types";

const processElement = (year: any) => ({
    year: year.year,
    value: Math.floor(year.total_ms_played / 1000 / 60)
})

const COLUMNS = [
  YEAR_COLUMN,
  MINUTES_PLAYED_COLUMN
];

const formatTopTracksTable: formatTableData = createTableFormat(processElement, COLUMNS);

export default formatTopTracksTable;