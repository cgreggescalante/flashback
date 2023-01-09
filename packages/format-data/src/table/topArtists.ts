import createTableFormat from "./createTableFormat";
import { formatTableData } from "../types";
import { TableColumns } from "./tableConstants";

const processElement = (artist: any, index: number) => {
  artist.value = Math.floor(artist.total_ms_played / 1000 / 60);
  return {
    rank: index + 1,
    ...artist
  };
};

const COLUMNS = [
  TableColumns.RANK,
  TableColumns.ARTIST_NAME,
  TableColumns.MINUTES_PLAYED
];

const formatTopArtistsTable: formatTableData = createTableFormat(processElement, COLUMNS);

export default formatTopArtistsTable;