import createChartFormat from "../../createChartFormat";
import { formatChartData } from "../../../types";

const createLabel = (month: any) => month.year_month;
const createDatum = (month: any) => month.total_ms_played / 1000 / 60;
const label = "Time (minutes)";

const formatListeningTimeChart: formatChartData = createChartFormat(createLabel, createDatum, label);

export default formatListeningTimeChart;