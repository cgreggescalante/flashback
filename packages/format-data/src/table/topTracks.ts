import createTableFormat from "./createTableFormat";
import { formatTableData } from "../types";
import { TableColumns } from "./tableConstants";

const processElement = (track: any, index: number) => {
  track.value = Math.floor(track.total_ms_played / 1000 / 60);

  return {
    rank: index + 1,
    ...track
  };
};

const COLUMNS = [
  TableColumns.RANK,
  TableColumns.TRACK_NAME,
  TableColumns.ALBUM_NAME,
  TableColumns.ARTIST_NAME,
  TableColumns.MINUTES_PLAYED
];

const formatTopTracksTable: formatTableData = createTableFormat(processElement, COLUMNS);

export default formatTopTracksTable;