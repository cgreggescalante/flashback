import Header from './header'

const MAIN = [
    { path: "/", name: "Home"},
    { path: "/track/all-time", name: "Top Tracks"},
    { path: "/artist/all-time", name: "Top Artists"},
]

const TRACK = [
    { path: "/track/all-time", name: "All Time" },
    { path: "/track/by-year/2022", name: "By Year"}
]

const TRACK_BY_YEAR = [
    { path: "/track/by-year/2019", name: "2019" },
    { path: "/track/by-year/2020", name: "2020" },
    { path: "/track/by-year/2021", name: "2021" },
    { path: "/track/by-year/2022", name: "2022" }
]

// eslint-disable-next-line react/display-name
const Layout = (links: any[]) => ({ children }: { children: any }) => (
    <>
        <Header links={links}/>
        <main>{children}</main>
    </>
)

export const MainLayout = Layout(MAIN)
export const TrackLayout = Layout(TRACK)
export const TrackByYearLayout = Layout(TRACK_BY_YEAR)