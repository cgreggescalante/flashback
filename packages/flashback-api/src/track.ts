import { dateToTimestamp, postStatement } from "./utils";

interface getByPlayTimeOptions {
  offset?: number;
  limit?: number;
  artistId?: string,
  rangeStart?: Date,
  rangeEnd?: Date
}

export class TrackAPI {
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
        "SELECT SUM(MS_PLAYED) AS TOTAL_MS_PLAYED, TRACK_NAME, ARTIST_NAME, TRACK.ARTIST_ID, ALBUM_NAME " +
        "FROM PLAY " +
        "JOIN TRACK ON PLAY.TRACK_ID = TRACK.ID " +
        "WHERE " +
        "(TRACK.ARTIST_ID = :artist_id OR :artist_id IS NULL) " +
        "AND PLAY.TS >= TO_TIMESTAMP(:start, 'YYYY-MM-DD HH24:MI:SS') " +
        "AND PLAY.TS < TO_TIMESTAMP(:end, 'YYYY-MM-DD HH24:MI:SS') " +
        "GROUP BY TRACK_NAME, ARTIST_NAME, TRACK.ARTIST_ID, ALBUM_NAME " +
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
        },
        {
          name: "artist_id",
          data_type: "VARCHAR2",
          value: options?.artistId
        }
      ]
    });
  };
}
