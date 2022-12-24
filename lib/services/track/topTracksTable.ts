import {ARTIST_NAME_COLUMN, MINUTES_PLAYED_COLUMN, RANK_COLUMN, TRACK_NAME_COLUMN} from "../../consts/table_constants";

const topTracksTable = async (getData: Function) => {
    let tracks = await getData()

    tracks.forEach((track: any) => track.value = Math.floor(track.value / 1000 / 60))
    tracks = tracks.map((track: any, index: number) => ({rank: index + 1, ...track}))

    const columns = [
        RANK_COLUMN,
        TRACK_NAME_COLUMN,
        ARTIST_NAME_COLUMN,
        MINUTES_PLAYED_COLUMN
    ]

    return { data: tracks, columns }
}

export default topTracksTable