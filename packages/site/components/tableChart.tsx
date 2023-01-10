import { Bar } from "react-chartjs-2";
import { chartOptions } from "format-data";
import Table from "./table/table";

/**
 * Simple component that renders a chart and table
 * @param chartName
 * @param data
 * @constructor
 */
const TableChartComponent = ({ data }) => (
  <>
    <Bar options={chartOptions(data.chartName)} data={data.chartData} />
    <Table data={data.tableData.data} columns={data.tableData.columns} />
  </>
);

export default TableChartComponent;
