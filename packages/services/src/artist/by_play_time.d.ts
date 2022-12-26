declare async function topArtists(limit: number, page: number, time_start: Date, time_end: Date): Document[];
declare async function topArtistsByYear(year: number, limit: number, page: number): Document[];
declare async function topArtistsAllTime(limit: number, page: number): Document[];
