import {ChartGenerator} from "../chartGenerator";
import {topTracksAllTime} from "./by_play_time";

const topTracksChart: ChartGenerator = async () => {
    const tracks = await topTracksAllTime()

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