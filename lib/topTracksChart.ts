import {tracksByPlayTime} from "./services/track/by_play_time";
import {ChartGenerator} from "./chartGenerator";

const topTracksChart: ChartGenerator = async () => {
    const tracks = await tracksByPlayTime()

    const labels = tracks.map(track => `${track.track_name}`);
    const data = tracks.map(track => track.value / 1000 / 60);

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

export default topTracksChart