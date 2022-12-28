import createChartFormat from "../../createChartFormat";
import { formatChartData } from "../../../types";

const createLabel = (week: any) => week.year_week;
const createDatum = (week: any) => week.total_ms_played / 1000 / 60;
const label = "Time (minutes)";

const formatListeningTimeChart: formatChartData = createChartFormat(createLabel, createDatum, label);

export default formatListeningTimeChart;