import Header from "./header";

const MAIN = [
  { path: "/", name: "Home" },
  { path: "/track/by-range", name: "Top Tracks" },
  { path: "/artist/by-range", name: "Top Artists" },
  { path: "/listeningTime", name: "Listening Time" }
];

const TRACK = [
  { path: "/track/by-range", name: "Custom Range" },
];

const ARTIST = [
  { path: "/artist/by-range", name: "Custom Range" },
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

export const ArtistLayout = Layout(ARTIST);
