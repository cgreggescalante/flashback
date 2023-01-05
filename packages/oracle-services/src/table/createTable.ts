import { Connection } from "oracledb";

export const createPlayIfNotExists = async (connection: Connection) => {
  try {
    await connection.execute("SELECT * FROM PLAY FETCH FIRST 1 ROWS ONLY");
  } catch {
    await connection.execute("CREATE TABLE PLAY (TS TIMESTAMP,USERNAME VARCHAR2(128),PLATFORM VARCHAR2(128),MS_PLAYED NUMBER(16, 0),CONN_COUNTRY VARCHAR2(16),IP_ADDR_DECRYPTED VARCHAR2(64),USER_AGENT_DECRYPTED VARCHAR2(128),TRACK_NAME VARCHAR2(256),ARTIST_NAME VARCHAR2(256),ALBUM_NAME VARCHAR2(256),TRACK_ID VARCHAR2(256),REASON_START VARCHAR2(128),REASON_END VARCHAR2(128),SHUFFLE NUMBER(8, 0),OFFLINE_MODE NUMBER(8, 0),OFFLINE_TIMESTAMP NUMBER(32, 0),INCOGNITO_MODE NUMBER(8, 0))")
  }
}

export const createTrackIfNotExists = async (connection: Connection) => {
  try {
    await connection.execute("SELECT * FROM TRACK FETCH FIRST 1 ROWS ONLY");
  } catch {
    await connection.execute("CREATE TABLE TRACK (NAME VARCHAR2(256),ID VARCHAR2(256),ALBUM_ID VARCHAR2(256),ARTIST_ID VARCHAR2(256),EXPLICIT NUMBER,POPULARITY NUMBER, TRACK_NUMBER NUMBER)")
  }
}

export const createArtistIfNotExists = async (connection: Connection) => {
  try {
    await connection.execute("SELECT * FROM ARTIST FETCH FIRST 1 ROWS ONLY");
  } catch {
    await connection.execute("CREATE TABLE ARTIST (NAME VARCHAR2(256), ID VARCHAR2(256), POPULARITY NUMBER, FOLLOWERS NUMBER)")
  }
}

export const createGenreIfNotExists = async (connection: Connection) => {
  try {
    await connection.execute("SELECT * FROM GENRE FETCH FIRST 1 ROWS ONLY");
  } catch {
    await connection.execute("CREATE TABLE GENRE (NAME VARCHAR2(256), ARTIST_ID VARCHAR2(256))")
  }
}