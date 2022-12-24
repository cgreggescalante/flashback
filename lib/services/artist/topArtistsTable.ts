import {topArtistsAllTime} from "./by_play_time";
import {ARTIST_NAME_COLUMN, MINUTES_PLAYED_COLUMN, RANK_COLUMN} from "../../consts/table_constants";

const topArtistsTable = async () => {
    let artists = await topArtistsAllTime(100)

    artists.forEach(artist => artist.value = Math.floor(artist.value / 1000 / 60))
    artists = artists.map((artist, index) => ({rank: index + 1, ...artist}))

    const columns = [
        RANK_COLUMN,
        ARTIST_NAME_COLUMN,
        MINUTES_PLAYED_COLUMN
    ]

    return { data: artists, columns }
}

export default topArtistsTable