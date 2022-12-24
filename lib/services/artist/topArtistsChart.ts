import {ChartGenerator} from "../chartGenerator";

const topArtistsChart: ChartGenerator = async (getArtists: Function) => {
    const artists = await getArtists()

    const labels = artists.map((artist: any) => artist.artist_name);
    const data = artists.map((artist: any) => artist.value / 1000 / 60);

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