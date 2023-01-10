import Link from "next/link";

export class TableColumns {
  static TRACK_NAME = {
    Header: "Track",
    accessor: "track_name",
    // Cell: ({ row }: { row: any }) => (<a href={`/track/${row.original.track_id}`}>{ row.original.track_name }</a>)
  };
  static ALBUM_NAME = {
    Header: "Album",
    accessor: "album_name",
    // Cell: ({ row }: { row: any }) => (<a href={`/album/${row.original.album_id}`}>{ row.original.album_name }</a>)
  };
  static ARTIST_NAME = {
    Header: "Artist",
    accessor: "artist_name",
    Cell: ({ row }: { row: any }) => (
      <Link href={`/artist#${row.original.artist_id}`}>
        { row.original.artist_name }
      </Link>
    )
  };
  static MINUTES_PLAYED = {
    Header: "Minutes Played",
    accessor: "value"
  };
  static RANK = {
    Header: "#",
    accessor: "rank"
  }
  static DAY = {
    Header: "Day",
    accessor: "day"
  }
  static WEEK = {
    Header: "Week",
    accessor: "week"
  }
  static MONTH = {
    Header: "Month",
    accessor: "month"
  }
  static YEAR = {
    Header: "Year",
    accessor: "year"
  }
}
