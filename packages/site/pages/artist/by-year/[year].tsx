import { Chart, registerables } from "chart.js";
import { topArtistChart, topArtistTable } from "format-data";
import { topArtistsByYear } from "oracle-services";
import { Bar } from "react-chartjs-2";

import { ArtistByYearLayout, ArtistLayout } from "../../../components/layout";
import Table from "../../../components/table";

Chart.register(...registerables);

const getStaticPaths = () => ({
  paths: [
    { params: { year: "2019" } },
    { params: { year: "2020" } },
    { params: { year: "2021" } },
    { params: { year: "2022" } }
  ],
  fallback: false
});

const getStaticProps = async ({ params }: { params: any }) => {
  const year = Number.parseInt(params.year);
  const topArtists = await topArtistsByYear(year, 100);
  const chartData = topArtistChart(topArtists.slice(0, 10));
  const { data, columns } = topArtistTable(topArtists);

  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: `Top Artists - ${params.year}`
      }
    }
  };

  return {
    props: {
      table: {
        data,
        columns
      },
      chart: {
        data: chartData,
        options: chartOptions
      }
    }
  };
};

const ByYear = ({ table, chart }: { table: any; chart: any }) => (
  <ArtistLayout>
    <ArtistByYearLayout>
      <Bar options={chart.options} data={chart.data} />
      <Table data={table.data} columns={table.columns} />
    </ArtistByYearLayout>
  </ArtistLayout>
);

export { getStaticPaths, getStaticProps };

export default ByYear;
