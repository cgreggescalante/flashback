import { topTracks, topTracksByYear } from "./src/track/by_play_time";
import { topArtists, topArtistsByYear } from "./src/artist/by_play_time";
import { createArtistIfNotExists, createPlayIfNotExists, createTrackIfNotExists } from "./src/table/createTable";
import { ARTISTS, INSIGHTS, LISTENING_TIME, TOP_ARTISTS, TOP_TRACKS } from "./src/uris";

export {
  topTracks,
  topTracksByYear,
  topArtists,
  topArtistsByYear,
  createPlayIfNotExists,
  createTrackIfNotExists,
  createArtistIfNotExists,
  TOP_TRACKS,
  ARTISTS,
  TOP_ARTISTS,
  LISTENING_TIME,
  INSIGHTS
};
