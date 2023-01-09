import {
  createArtistIfNotExists,
  createGenreIfNotExists,
  createPlayIfNotExists,
  createTrackIfNotExists
} from "./src/table/createTable";
import { fetchInsights, fetchTableAndChart } from "./src/listeningTime/listeningTime";
import { ARTISTS, INSIGHTS, LISTENING_TIME, TOP_ARTISTS, TOP_TRACKS } from "./src/uris";

export {
  createPlayIfNotExists,
  createTrackIfNotExists,
  createArtistIfNotExists,
  createGenreIfNotExists,
  fetchInsights,
  fetchTableAndChart,
  TOP_TRACKS,
  ARTISTS,
  TOP_ARTISTS,
  LISTENING_TIME,
  INSIGHTS
};
