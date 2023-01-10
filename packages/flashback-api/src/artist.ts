import { dateToTimestamp, postStatement } from "./utils";

interface getByPlayTimeOptions {
  offset?: number,
  limit?: number,
  rangeStart?: Date,
  rangeEnd?: Date
}

export class ArtistAPI {
  static get = async (
    artistId: string
  ): Promise<any[]> => {
    return await postStatement({
      statementText: "SELECT * FROM ARTIST WHERE ID = :id",
      binds: [
        {
          name: "id",
          data_type: "VARCHAR2",
          value: artistId
        }
      ]
    })
  }

  static getIds = async (
    limit: number,
    offset: number
  ): Promise<any[]> => {
    return await postStatement({
      statementText: "SELECT ID FROM ARTIST ORDER BY ID",
      offset,
      limit
    });
  };

  static getAllIds = async (): Promise<string[]> => {
    const limit = 1000;
    let offset = 0;
    const ids = [];

    while (true) {
      const result = await ArtistAPI.getIds(limit, offset);
      if (result.length == 0) {
        break;
      }
      ids.push(...result);
      offset += limit;
    }

    return ids.map(id => id.id);
  };

  static getByPlayTime = async (options?: getByPlayTimeOptions): Promise<any[]> => {
    let start = dateToTimestamp(new Date(0, 0));
    let end = dateToTimestamp(new Date(9999, 0));

    if (options?.rangeStart) {
      start = dateToTimestamp(options.rangeStart);
    }
    if (options?.rangeEnd) {
      end = dateToTimestamp(options.rangeEnd);
    }


    return await postStatement({
      statementText:
        "SELECT SUM(MS_PLAYED) AS TOTAL_MS_PLAYED, ARTIST.ID AS ARTIST_ID, ARTIST.NAME AS ARTIST_NAME, ARTIST.POPULARITY, ARTIST.FOLLOWERS " +
        "FROM ARTIST " +
        "JOIN TRACK ON TRACK.ARTIST_ID = ARTIST.ID " +
        "JOIN PLAY ON PLAY.TRACK_ID = TRACK.ID " +
        "WHERE PLAY.TS >= TO_TIMESTAMP(:start, 'YYYY-MM-DD HH24:MI:SS') AND PLAY.TS < TO_TIMESTAMP(:end, 'YYYY-MM-DD HH24:MI:SS') " +
        "GROUP BY ARTIST.ID, ARTIST.NAME, ARTIST.POPULARITY, ARTIST.FOLLOWERS " +
        "ORDER BY SUM(MS_PLAYED) DESC",
      limit: options?.limit ? options.limit : 100,
      offset: options?.offset ? options.offset : 0,
      binds: [
        {
          name: "start",
          data_type: "VARCHAR2",
          value: start
        },
        {
          name: "end",
          data_type: "VARCHAR2",
          value: end
        }
      ]
    });
  };
}
