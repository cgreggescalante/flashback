import {tracksByPlayTime} from "./services/track/by_play_time";
import {ARTIST_NAME_COLUMN, MINUTES_PLAYED_COLUMN, RANK_COLUMN, TRACK_NAME_COLUMN} from "./table_constants";

const topTracksTable = async () => {
    let tracks = await tracksByPlayTime(100)

    tracks.forEach(track => track.value = Math.floor(track.value / 1000 / 60))
    tracks = tracks.map((track, index) => ({rank: index + 1, ...track}))

    const columns = [
        RANK_COLUMN,
        TRACK_NAME_COLUMN,
        ARTIST_NAME_COLUMN,
        MINUTES_PLAYED_COLUMN
    ]

    return { data: tracks, columns }
}

export default topTracksTable