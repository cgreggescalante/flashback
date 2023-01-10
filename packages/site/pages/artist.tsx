import { Chart, registerables } from "chart.js";
import { useState } from "react";
import useSWR from "swr";

import LoadedComponent from "../components/loadedComponent";
import SelectDate from "../components/selectDate";
import { ArtistAPI, TrackAPI } from "flashback-api";
import { useRouter } from "next/router";
import { topArtistChart, topArtistTable, topTrackChart, topTrackTable } from "format-data";
import TableChartComponent from "../components/tableChart";

Chart.register(...registerables);

const fetcher = ({
  rangeStart,
  rangeEnd,
  artistId
}: {
  rangeStart: Date;
  rangeEnd: Date;
  artistId: string
}) => {
  if (artistId !== undefined) {
    return null;
  }

  return ArtistAPI.getByPlayTime({ rangeStart, rangeEnd })
    .then((artists) => ({
      chartName: "Top Artists",
      chartData: topArtistChart(artists.slice(0, 10)),
      tableData: topArtistTable(artists)
    }));
}

const fetchArtist = async ({ artistId }: { artistId: string }) => {
  if (artistId == undefined) {
    return null;
  }

  return await ArtistAPI.get(artistId)
    .then(data => data[0])
}

const fetchTracks = async ({ artistId }: { artistId: string }) => {
  if (artistId == undefined) {
    return null;
  }

  return await TrackAPI.getByPlayTime({ artistId })
    .then(data => ({
      chartName: "Top Tracks",
      chartData: topTrackChart(data.slice(0, 10)),
      tableData: topTrackTable(data)
    }))
}

const ArtistComponent = ({ data }) => (
  <>
    <h2>{ data.name }</h2>
    Followers : { data.followers } <br />
    Popularity : { data.popularity } <br />
  </>
)

const Artist = () => {
  const [rangeStart, setRangeStart] = useState(new Date(0, 0));
  const [rangeEnd, setRangeEnd] = useState(new Date(9999, 0));

  const router = useRouter()

  const path = router.asPath;

  let artistId: string;

  if (path.includes("#")) {
    artistId = path.split("#")[1];
  }

  const artistSWR = useSWR({ artistId, key: "artist" }, fetchArtist);
  const trackSWR = useSWR({ artistId, key: "track" }, fetchTracks);

  const artistListSWR = useSWR({ rangeStart, rangeEnd, artistId, key: "artists" }, fetcher);

  return (
    <>
      {
        artistId ? (
          <LoadedComponent data={artistSWR.data} error={artistSWR.error} component={ArtistComponent} />
        ) : null
      }
      Start <SelectDate setDate={setRangeStart} /> <br />
      End <SelectDate setDate={setRangeEnd} /> <br />
      {
        artistId ? (
          <>

            <LoadedComponent data={trackSWR.data} error={trackSWR.error} component={TableChartComponent} />
          </>
        ) : (
          <>
            <LoadedComponent data={artistListSWR.data} error={artistListSWR.error} component={TableChartComponent} />
          </>
        )
      }
    </>
  )
};

export default Artist
