import createChartFormat from "../createChartFormat";
import {formatChartData} from "../../types";

const createLabel = (track: any) => track.track_name
const createDatum = (track: any) => track.value / 1000 / 60
const label = "Time (minutes)"

const formatTopTracksChart: formatChartData = createChartFormat(createLabel, createDatum, label);

export default formatTopTracksChart;