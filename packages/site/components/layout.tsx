import Header from "./header";

const MAIN = [
  { path: "/", name: "Home" },
  { path: "/track/by-range", name: "Top Tracks" },
  { path: "/artist/by-range", name: "Top Artists" },
  { path: "/listeningTime", name: "Listening Time" }
];

const TRACK = [
  { path: "/track/by-range", name: "Custom Range" },
  { path: "/track/by-year/2022", name: "By Year" }
];

const TRACK_BY_YEAR = [
  { path: "/track/by-year/2019", name: "2019" },
  { path: "/track/by-year/2020", name: "2020" },
  { path: "/track/by-year/2021", name: "2021" },
  { path: "/track/by-year/2022", name: "2022" }
];

const ARTIST = [
  { path: "/artist/by-range", name: "Custom Range" },
  { path: "/artist/by-year/2022", name: "By Year" }
];

const ARTIST_BY_YEAR = [
  { path: "/artist/by-year/2019", name: "2019" },
  { path: "/artist/by-year/2020", name: "2020" },
  { path: "/artist/by-year/2021", name: "2021" },
  { path: "/artist/by-year/2022", name: "2022" }
];

// eslint-disable-next-line react/display-name
const Layout =
  (links: any[]) =>
  ({ children }: { children: any }) =>
    (
      <>
        <Header links={links} />
        <main>{children}</main>
      </>
    );

export const MainLayout = Layout(MAIN);

export const TrackLayout = Layout(TRACK);
export const TrackByYearLayout = Layout(TRACK_BY_YEAR);

export const ArtistLayout = Layout(ARTIST);
export const ArtistByYearLayout = Layout(ARTIST_BY_YEAR);
