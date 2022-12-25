import {createChart} from "../chartGenerator";

const createLabel = (track: any) => track.track_name
const createDatum = (track: any) => track.value / 1000 / 60
const label = "Time (minutes)"

export default createChart(createLabel, createDatum, label);