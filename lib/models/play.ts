import {ObjectId} from "mongodb";

export default class Play {
    constructor(
        public ts: string,
        public username: string,
        public platform: string,
        public ms_played: string,
        public conn_country: string,
        public ip_addr_decrypted: string,
        public user_agent_decrypted: string,
        public master_metadata_track_name: string,
        public master_metadata_album_artist_name: string,
        public master_metadata_album_album_name: string,
        public spotify_track_uri: string,
        public episode_name: string,
        public episode_show_name: string,
        public spotify_episode_uri: string,
        public reason_start: string,
        public reason_end: string,
        public shuffle: string,
        public skipped: string,
        public offline: string,
        public offline_timestamp: string,
        public incognito_mode: string,
        public id?: ObjectId,
    ) {
    }
}