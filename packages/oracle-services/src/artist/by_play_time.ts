import { TOP_ARTISTS } from "../uris";

export const topArtists = async (
  limit: number = 10,
  page: number = 0,
  range_start: string = "0001-01-01T00:00:00.00Z",
  range_end: string = "9999-01-01T00:00:00.00Z"
): Promise<Document[]> => {
  const options = {
    method: "GET"
  };

  const params = {
    "limit": limit.toString(),
    "offset": (page * limit).toString(),
    "range_start": range_start,
    "range_end": range_end
  };

  const url = TOP_ARTISTS + (new URLSearchParams(params));

  return fetch(url, options)
    .then(res => res.json())
    .then(data => data.items);
};

export const topArtistsByYear = (
  year: number,
  limit: number = 10,
  page: number = 0
) => topArtists(
  limit,
  page,
  `${year}-01-01T00:00:00.00Z`,
  `${year + 1}-01-01T00:00:00.00Z`
);