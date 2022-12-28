import createChartFormat from "../../createChartFormat";
import { formatChartData } from "../../../types";

const createLabel = (day: any) => day.year_month_day;
const createDatum = (day: any) => day.total_ms_played / 1000 / 60;
const label = "Time (minutes)";

const formatListeningTimeChart: formatChartData = createChartFormat(createLabel, createDatum, label);

export default formatListeningTimeChart;