import {Bar} from 'react-chartjs-2';
import {Chart, registerables} from 'chart.js';
import ChartAsync from "./ChartAsync";

Chart.register(...registerables)

export default ChartAsync((options: {}, data: any) => (<Bar options={options} data={data} />))
