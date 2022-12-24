import {PlaySelector} from "../../consts/mongo_constants";
import {PLAY} from "../../consts/aggregation";
import clientPromise from "../mongodb";

const tracksByPlayTime = async (
    limit: number = 10, page: number = 0
) => {
    const client = await clientPromise;

    const db = client.db("flashback");

    const tracks = await (db.collection("play")
        .aggregate([
            { $match: {
                master_metadata_track_name: { $ne: null }
            }},
            { $group: {
                _id: {
                    uri: PlaySelector.TrackUri,
                    track_name: PlaySelector.TrackName,
                    artist_name: PlaySelector.ArtistName
                },
                total: PLAY.MS_PLAYED.SUM
            }},
            { $sort: {
                total: -1
            }},
            { $skip: limit * page },
            { $limit: limit }
        ]).toArray())

    return tracks.map(track => ({ ...track._id, value: track.total }))
}

export const topTracksAllTime = (
    limit: number = 10,
    page: number = 0
) => tracksByPlayTime(limit, page)