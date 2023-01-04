import {
  ALBUM_NAME_COLUMN,
  ARTIST_NAME_COLUMN,
  MINUTES_PLAYED_COLUMN,
  RANK_COLUMN,
  TRACK_NAME_COLUMN
} from "../table_constants";
import createTableFormat from "../createTableFormat";
import { formatTableData } from "../../types";

const processElement = (track: any, index: number) => {
  track.value = Math.floor(track.total_ms_played / 1000 / 60);

  return {
    rank: index + 1,
    ...track
  };
};

const COLUMNS = [
  RANK_COLUMN,
  TRACK_NAME_COLUMN,
  ARTIST_NAME_COLUMN,
  ALBUM_NAME_COLUMN,
  MINUTES_PLAYED_COLUMN
];

const formatTopTracksTable: formatTableData = createTableFormat(processElement, COLUMNS);

export default formatTopTracksTable;