import {Bar} from "react-chartjs-2";
import {Chart, registerables} from "chart.js";
import topTracksChart from "../lib/topTracksChart";

Chart.register(...registerables)

const options = {
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: 'Top Tracks - All Time'
        }
    }
}

const getStaticProps = async () => {
    const data = await topTracksChart()

    return { props: { data } }
}

export { getStaticProps }

const About = ({ data }: { data: any }) => (
    <>
        <Bar options={options} data={data} />
    </>
)

export default About