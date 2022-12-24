import {ChartGenerator} from "../chartGenerator";

const topTracksChart: ChartGenerator = async (getTracks: Function) => {
    const tracks = await getTracks()

    const labels = tracks.map((track: any) => `${track.track_name}`);
    const data = tracks.map((track: any) => track.value / 1000 / 60);

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