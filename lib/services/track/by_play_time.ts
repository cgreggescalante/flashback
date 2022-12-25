import {PlaySelector} from "../../consts/mongo_constants";
import {PLAY} from "../../consts/aggregation";
import clientPromise from "../mongodb";

const tracksByPlayTime = async (
    limit: number = 10,
    page: number = 0,
    time_start: Date = new Date('0000-01-01T00:00:01Z'),
    time_end: Date = new Date('9999-01-01T00:00:01Z')
) => {
    const client = await clientPromise;

    const db = client.db("flashback");

    const dateConvertStage = {
        $addFields: {
            timestamp: {
                $dateFromString: {
                    dateString: PlaySelector.TimeStamp,
                    format: "%Y-%m-%dT%H:%M:%SZ"
                }
            }
        }
    }

    const matchStage = {
        $match: {
            $and: [
                {
                    master_metadata_track_name: { $ne: null }
                },
                {
                    timestamp: { $gte: time_start }
                },
                {
                    timestamp: { $lte: time_end }
                }
            ]
        } }

    const groupStage = { $group: {
        _id: {
            uri: PlaySelector.TrackUri,
            track_name: PlaySelector.TrackName,
            artist_name: PlaySelector.ArtistName
        },
        total: PLAY.MS_PLAYED.SUM
    }}

    const sortStage = { $sort: {
            total: -1
        }}

    const skipStage = { $skip: limit * page }

    const limitStage = { $limit: limit }

    const tracks = await (db.collection("play")
        .aggregate([
            dateConvertStage,
            matchStage,
            groupStage,
            sortStage,
            skipStage,
            limitStage
        ]).toArray())

    return tracks.map(track => ({ ...track._id, value: track.total }))
}

export const topTracksByYear = (
    year: number,
    limit: number = 10,
    page: number = 0,
) => tracksByPlayTime(
    limit,
    page,
    new Date(year, 0),
    new Date(year + 1, 0)
)

export const topTracksAllTime = (
    limit: number = 10,
    page: number = 0
) => tracksByPlayTime(
    limit,
    page
)