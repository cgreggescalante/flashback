import {
  createArtistIfNotExists,
  createGenreIfNotExists,
  createPlayIfNotExists,
  createTrackIfNotExists
} from "./src/table/createTable";
import { ARTISTS, INSIGHTS, TOP_TRACKS } from "./src/uris";

export {
  createPlayIfNotExists,
  createTrackIfNotExists,
  createArtistIfNotExists,
  createGenreIfNotExists,
  TOP_TRACKS,
  ARTISTS,
  INSIGHTS
};
