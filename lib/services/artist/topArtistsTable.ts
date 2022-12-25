import {ARTIST_NAME_COLUMN, MINUTES_PLAYED_COLUMN, RANK_COLUMN} from "../../consts/table_constants";

const topArtistsTable = async (artists: any[]) => {
    artists.forEach((artist: any) => artist.value = Math.floor(artist.value / 1000 / 60))
    artists = artists.map((artist: any, index: number) => ({rank: index + 1, ...artist}))

    const columns = [
        RANK_COLUMN,
        ARTIST_NAME_COLUMN,
        MINUTES_PLAYED_COLUMN
    ]

    return { data: artists, columns }
}

export default topArtistsTable