import { TOP_TRACKS } from "../uris";

export const topTracks = async (
  limit: number = 10,
  page: number = 0,
  rangeStart: string = "0001-01-01T00:00:00.00Z",
  rangeEnd: string = "9999-01-01T00:00:00.00Z"
): Promise<Document[]> => {
  rangeStart = rangeStart ? rangeStart : "0001-01-01T00:00:00.00Z"
  rangeEnd = rangeEnd ? rangeEnd : "9999-01-01T00:00:00.00Z"

  const options = {
    method: "GET"
  };

  const params = {
    "limit": limit.toString(),
    "offset": (page * limit).toString(),
    "range_start": rangeStart,
    "range_end": rangeEnd
  };

  const url = TOP_TRACKS + (new URLSearchParams(params));

  return fetch(url, options)
    .then(res => res.json())
    .then(data => data.items);
};

export const topTracksByYear = (
  year: number,
  limit: number = 10,
  page: number = 0
) => topTracks(
  limit,
  page,
  `${year}-01-01T00:00:00.00Z`,
  `${year + 1}-01-01T00:00:00.00Z`
);