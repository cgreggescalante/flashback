import {PlaySelector} from "./mongo_constants";

export const PLAY = {
    MS_PLAYED: {
        SUM: { $sum: PlaySelector.MsPlayed }
    },
    ARTIST_NAME: {
        NOT_NULL: { master_metadata_album_artist_name: { $ne: null } }
    }
}