import { ARTIST_IDS } from "../uris";

export default async () => {
  let offset = 1;
  let prev_length = 0;
  const ids: string[] = [];

  while (true) {
    await fetch(ARTIST_IDS + `offset=${offset}`)
      .then(res => res.json())
      .then(data => data.items.map((item: any) => item.id))
      .then(items => ids.push(...items));

    if (ids.length == prev_length) {
      break;
    }

    prev_length = ids.length;
    offset += 1000;
  }

  return ids;
}