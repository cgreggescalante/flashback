import {Bar} from "react-chartjs-2";
import {Chart, registerables} from "chart.js";
import loadTracks from "../lib/loadTracks";

Chart.register(...registerables)

const options = {
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: 'Test Chart'
        }
    }
}

const getStaticProps = async () => {
    const data = await loadTracks()

    return { props: { data } }
}

export { getStaticProps }

const About = ({ data }: { data: any }) => (
    <>
        <h1>About</h1>
        <Bar options={options} data={data} />
    </>
)

export default About