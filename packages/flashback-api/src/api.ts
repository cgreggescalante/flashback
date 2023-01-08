const BASE_URL = "https://g0cde1310ac37a5-flashback.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/_/sql"

const postStatement = async (statement: string, binds?: []): Promise<any[]> => {
  return await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/sql",
      "Authorization": "Basic QURNSU46RVFxSjdZOUNLYkNOMlVMXw=="
    },
    body: statement
  }).then(res => res.json())
    .then(body => {
      return body.items[0].resultSet.items;
    })
}

const dateToTimestamp = (date: Date): string => {
  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString();
  const day = date.getDate().toString();

  const hour = date.getHours().toString();
  const minute = date.getMinutes().toString();
  const second = date.getSeconds().toString();

  return `${year.padStart(4, "0")}-${month.padStart(2, "0")}-${day.padStart(2, "0")} ${hour.padStart(2, "0")}:${minute.padStart(2, "0")}:${second.padStart(2, "0")}`
}

export const artistGetIds = async (limit: number, offset: number): Promise<string[]> => {
  return await postStatement(`SELECT ID FROM ARTIST OFFSET ${offset} ROWS FETCH NEXT ${limit} ROWS ONLY`)
    .then(items => items.map(item => item["id"]))
}

export const artistGetAllIds = async (): Promise<string[]> => {
  const limit = 1000;
  let offset = 0;
  const ids = [];

  while (true) {
    const result = await artistGetIds(limit, offset);
    if (result.length == 0) {
      break;
    }
    ids.push(...result);
  }

  return ids;
}

export const artistGetByPlayTime = async (offset: number = 0, limit: number = 100, rangeStart?: Date, rangeEnd?: Date): Promise<any[]> => {
  const start = dateToTimestamp(rangeStart ? rangeStart : new Date(0, 0, 1));
  const end = dateToTimestamp(rangeEnd ? rangeEnd : new Date(9999, 0, 1));

  return await postStatement(
    `SELECT SUM(MS_PLAYED) AS TOTAL_MS_PLAYED, ARTIST.ID AS ARTIST_ID, ARTIST.NAME AS ARTIST_NAME, ARTIST.POPULARITY, ARTIST.FOLLOWERS 
    FROM ARTIST 
    JOIN TRACK ON TRACK.ARTIST_ID = ARTIST.ID 
    JOIN PLAY ON PLAY.TRACK_ID = TRACK.ID 
    WHERE PLAY.TS >= TO_TIMESTAMP('${start}', 'YYYY-MM-DD HH24:MI:SS') AND PLAY.TS < TO_TIMESTAMP('${end}', 'YYYY-MM-DD HH24:MI:SS') 
    GROUP BY ARTIST.ID, ARTIST.NAME, ARTIST.POPULARITY, ARTIST.FOLLOWERS 
    ORDER BY SUM(MS_PLAYED) DESC 
    OFFSET ${offset} ROWS 
    FETCH NEXT ${limit} ROWS ONLY`
  )
}