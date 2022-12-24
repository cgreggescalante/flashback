import clientPromise from "../../mongodb";

export const tracksByPlayTime = async (limit: number = 10, page: number = 0) => {
    const client = await clientPromise;

    const db = client.db("flashback");

    const tracks = await (db.collection("play")
        .aggregate([
            { $match: {
                master_metadata_track_name: { $ne: null }
            }},
            { $group: {
                _id: {
                    uri: "$spotify_track_uri",
                    track_name: "$master_metadata_track_name",
                    artist_name: "$master_metadata_album_artist_name"
                },
                total: { $sum: "$ms_played"}
            }},
            { $sort: {
                total: -1
            }},
            { $limit: limit }
        ]).toArray())

    return tracks.map(track => ({ ...track._id, value: track.total }))
}