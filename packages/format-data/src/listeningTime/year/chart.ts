import createChartFormat from "../../createChartFormat";
import { formatChartData } from "../../../types";

const createLabel = (year: any) => year.year;
const createDatum = (year: any) => year.total_ms_played / 1000 / 60;
const label = "Time (minutes)";

const formatListeningTimeChart: formatChartData = createChartFormat(createLabel, createDatum, label);

export default formatListeningTimeChart;