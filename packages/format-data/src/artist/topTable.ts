import { ARTIST_NAME_COLUMN, MINUTES_PLAYED_COLUMN, RANK_COLUMN } from "../table_constants";
import createTableFormat from "../createTableFormat";
import { formatTableData } from "../../types";

const processElement = (artist: any, index: number) => {
  artist.value = Math.floor(artist.total_ms_played / 1000 / 60);
  return {
    rank: index + 1,
    ...artist
  };
};

const COLUMNS = [
  RANK_COLUMN,
  ARTIST_NAME_COLUMN,
  MINUTES_PLAYED_COLUMN
];

const formatTopArtistsTable: formatTableData = createTableFormat(processElement, COLUMNS);

export default formatTopArtistsTable;