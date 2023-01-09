import { dateToTimestamp, postStatementJSON } from "./utils";

export class TrackAPI {
  static getByPlayTime = async (
    offset: number = 0,
    limit: number = 100,
    rangeStart?: Date,
    rangeEnd?: Date
  ): Promise<any[]> => {
    const start = dateToTimestamp(rangeStart ? rangeStart : new Date(0, 0));
    const end = dateToTimestamp(rangeEnd ? rangeEnd : new Date(9999, 0));

    return await postStatementJSON({
      statementText:
        "SELECT SUM(MS_PLAYED) AS TOTAL_MS_PLAYED, TRACK_NAME, ARTIST_NAME, TRACK.ARTIST_ID, ALBUM_NAME " +
        "FROM PLAY " +
        "JOIN TRACK ON PLAY.TRACK_ID = TRACK.ID " +
        "WHERE " +
        "PLAY.TS >= TO_TIMESTAMP(:start, 'YYYY-MM-DD HH24:MI:SS') " +
        "AND PLAY.TS < TO_TIMESTAMP(:end, 'YYYY-MM-DD HH24:MI:SS') " +
        "GROUP BY TRACK_NAME, ARTIST_NAME, TRACK.ARTIST_ID, ALBUM_NAME " +
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
