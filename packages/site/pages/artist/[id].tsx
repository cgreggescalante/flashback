import { ARTISTS, TOP_TRACKS } from "oracle-services";
import useSWR from "swr";
import LoadedComponent from "../../components/loadedComponent";
import { useRouter } from "next/router";
import { Bar } from "react-chartjs-2";
import Table from "../../components/table";
import { chartOptions, topTrackChart, topTrackTable } from "format-data";
import { Chart, registerables } from "chart.js";
import { artistGetAllIds } from "flashback-api";

Chart.register(...registerables);

export const getStaticPaths = async () => {
  const ids = await artistGetAllIds();

  const paths = []

  paths.push(...ids.map(id => ({
      params: { id }
  })))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async () => {
  return { props: {} }
}

const fetchArtist = ({ id }: { id: string }) => {
  const request = ARTISTS + `id=${id}`

  return fetch(request)
    .then(res => res.json())
    .then(data => data.items[0])
}

const fetchTracks = ({ id }: { id: string }) => {
  const request = TOP_TRACKS + `artist_id=${id}&limit=100`

  return fetch(request)
    .then(res => res.json())
    .then(data => data.items)
    .then(data => ({
      chartData: topTrackChart(data.slice(0, 10)),
      tableData: topTrackTable(data)
    }))
}

const ArtistComponent = ({ data }) => (
  <>
    <h2>{ data.name }</h2>

  </>
)

const TrackComponent = ({ data }) => (
  <>
    <Bar options={chartOptions("Top Track")} data={data.chartData} />
    <Table data={data.tableData.data} columns={data.tableData.columns} />
  </>
)

const ById = () => {
  const router = useRouter();
  const { id } = router.query;

  const artistSWR = useSWR({ id, key: "artist" }, fetchArtist);
  const artistData = artistSWR.data;
  const artistError = artistSWR.error;

  const trackSWR = useSWR({ id, key: "track" }, fetchTracks);
  const trackData = trackSWR.data;
  const trackError = trackSWR.error;

  return (
    <>
      <LoadedComponent data={artistData} error={artistError} component={ArtistComponent} />
      <LoadedComponent data={trackData} error={trackError} component={TrackComponent} />
    </>
  )
}

export default ById