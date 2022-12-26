declare async function topTracks(limit: number, page: number, time_start: Date, time_end: Date): Document[];
declare async function topTracksByYear(year: number, limit: number, page: number): Document[];
declare async function topTracksAllTime(limit: number, page: number): Document[];
