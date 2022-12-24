import {ChartGenerator} from "./chartGenerator";
import {artistsByPlayTime} from "./services/artist/by_play_time";

const topArtistsChart: ChartGenerator = async () => {
    const artists = await artistsByPlayTime()

    const labels = artists.map(artist => artist.artist_name);
    const data = artists.map(artist => artist.value / 1000 / 60);

    return {
        labels,
        datasets: [
            {
                label: 'Time (minutes)',
                data: data,
                backgroundColor: 'rgba(84,59,208,0.5)'
            }
        ]
    }
}

export default topArtistsChart