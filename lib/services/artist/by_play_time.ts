import clientPromise from "../../mongodb";

export const artistsByPlayTime = async (limit: number = 10, page: number = 0) => {
    const client = await clientPromise;

    const db = client.db("flashback");

    const artists = await (db.collection("play")
        .aggregate([
            { $match: {
                    master_metadata_album_artist_name: { $ne: null }
                }},
            { $group: {
                    _id: {
                        artist_name: "$master_metadata_album_artist_name"
                    },
                    total: { $sum: "$ms_played"}
                }},
            { $sort: {
                    total: -1
                }},
            { $limit: limit }
        ]).toArray())

    return artists.map(artist => ({ ...artist._id, value: artist.total }))
}