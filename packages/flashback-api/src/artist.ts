import { dateToTimestamp, postStatementJSON } from "./utils";

export class ArtistAPI {
  static getIds = async (
    limit: number,
    offset: number
  ): Promise<string[]> => {
    return await postStatementJSON({
      statementText: "SELECT ID FROM ARTIST",
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
    }

    return ids;
  };

  static getByPlayTime = async (
    offset: number = 0,
    limit: number = 100,
    rangeStart?: Date,
    rangeEnd?: Date
  ): Promise<any[]> => {
    const start = dateToTimestamp(rangeStart ? rangeStart : new Date(0, 0, 1));
    const end = dateToTimestamp(rangeEnd ? rangeEnd : new Date(9999, 0, 1));

    return await postStatementJSON({
      statementText:
        "SELECT SUM(MS_PLAYED) AS TOTAL_MS_PLAYED, ARTIST.ID AS ARTIST_ID, ARTIST.NAME AS ARTIST_NAME, ARTIST.POPULARITY, ARTIST.FOLLOWERS " +
        "FROM ARTIST " +
        "JOIN TRACK ON TRACK.ARTIST_ID = ARTIST.ID " +
        "JOIN PLAY ON PLAY.TRACK_ID = TRACK.ID " +
        "WHERE PLAY.TS >= TO_TIMESTAMP(:start, 'YYYY-MM-DD HH24:MI:SS') AND PLAY.TS < TO_TIMESTAMP(:end, 'YYYY-MM-DD HH24:MI:SS') " +
        "GROUP BY ARTIST.ID, ARTIST.NAME, ARTIST.POPULARITY, ARTIST.FOLLOWERS " +
        "ORDER BY SUM(MS_PLAYED) DESC",
      limit,
      offset,
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
