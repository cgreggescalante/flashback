import createChartFormat from "../createChartFormat";
import {formatChartData} from "../../types";

const createLabel = (artist: any) => artist.artist_name
const createDatum = (artist: any) => artist.total_ms_played / 1000 / 60
const label = "Time (minutes)"

const formatTopArtistsChart: formatChartData = createChartFormat(createLabel, createDatum, label);

export default formatTopArtistsChart;
