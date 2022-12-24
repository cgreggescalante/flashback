import {ARTIST_NAME_COLUMN, MINUTES_PLAYED_COLUMN} from "./table_constants";
import {artistsByPlayTime} from "./services/artist/by_play_time";

const topArtistsTable = async () => {
    let artists = await artistsByPlayTime(100)

    artists.forEach(artist => artist.value = Math.floor(artist.value / 1000 / 60))

    const columns = [
        ARTIST_NAME_COLUMN,
        MINUTES_PLAYED_COLUMN
    ]

    return { data: artists, columns }
}

export default topArtistsTable