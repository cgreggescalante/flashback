import {createChart} from "../chartGenerator";

const createLabel = (artist: any) => artist.artist_name
const createDatum = (artist: any) => artist.value / 1000 / 60
const label = "Time (minutes)"

export default createChart(createLabel, createDatum, label);
