export const TRACK_NAME_COLUMN = {
  Header: "Track",
  accessor: "track_name",
  // Cell: ({ row }: { row: any }) => (<a href={`/track/${row.original.track_id}`}>{ row.original.track_name }</a>)
};

export const ALBUM_NAME_COLUMN = {
  Header: "Album",
  accessor: "album_name",
  // Cell: ({ row }: { row: any }) => (<a href={`/album/${row.original.album_id}`}>{ row.original.album_name }</a>)
};

export const ARTIST_NAME_COLUMN = {
  Header: "Artist",
  accessor: "artist_name",
  Cell: ({ row }: { row: any }) => (<a href={`/artist/${row.original.artist_id}`}>{ row.original.artist_name }</a>)
};

export const MINUTES_PLAYED_COLUMN = {
  Header: "Minutes Played",
  accessor: "value"
};

export const RANK_COLUMN = {
  Header: "#",
  accessor: "rank"
};

export const DAY_COLUMN = {
  Header: "Day",
  accessor: "day"
};

export const WEEK_COLUMN = {
  Header: "Week",
  accessor: "week"
};

export const MONTH_COLUMN = {
  Header: "Month",
  accessor: "month"
};

export const YEAR_COLUMN = {
  Header: "Year",
  accessor: "year"
}
