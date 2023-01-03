import { createPlayIfNotExists } from "oracle-services";

const formidable = require("formidable");
const fs = require("fs");

const oracledb = require("oracledb");
require("dotenv").config();

try {
  oracledb.initOracleClient();
} catch (err) {}

export default async (req, res) => {
  const data = await new Promise(function (resolve, reject) {
    const form = new formidable.IncomingForm({ keepExtensions: true });
    form.parse(req, function (err, fields, files) {
      if (err) return reject(err);
      resolve({ fields, files });
    });
  });

  // Get Plays
  let plays = [];
  const track_ids = new Set<string>();

  Object.getOwnPropertyNames(data["files"]).forEach((fileName) => {
    const raw = fs.readFileSync(data["files"][fileName].filepath);
    let arr = JSON.parse(raw);

    arr = arr.filter((play) => play.spotify_track_uri !== null);

    arr.forEach((play) => track_ids.add(play.spotify_track_uri.split(":")[2]));

    plays.push(...arr);
  });

  // Create Table
  let connection;

  try {
    connection = await oracledb.getConnection({ user: "admin", password: "EQqJ7Y9CKbCN2UL_", connectionString: "flashback_high" })
  } catch (err) {
    res.error(err)
  }

  try {
    await createPlayIfNotExists(connection);
  } catch (err) {
    console.error(err);
    res.status(500).json({})
  }

  // Add entries to PLAY
  try {
    const sql = "INSERT INTO PLAY (TS, USERNAME, PLATFORM, MS_PLAYED, CONN_COUNTRY, IP_ADDR_DECRYPTED, USER_AGENT_DECRYPTED, TRACK_NAME, ARTIST_NAME, ALBUM_NAME, TRACK_ID, REASON_START, REASON_END, SHUFFLE, OFFLINE_MODE, OFFLINE_TIMESTAMP, INCOGNITO_MODE) VALUES (:ts, :username, :platform, :ms_played, :conn_country, :ip_addr_decrypted, :user_agent_decrypted, :track_name, :artist_name, :album_name, :track_id, :reason_start, :reason_end, :shuffle, :offline_mode, :offline_timestamp, :incognito_mode)"

    const options = {
      autoCommit: true,
      bindDefs: {
        ts: { type: oracledb.STRING, maxSize: 128 },
        username: { type: oracledb.STRING, maxSize: 128 },
        platform: { type: oracledb.STRING, maxSize: 128 },
        ms_played: { type: oracledb.NUMBER },
        conn_country: { type: oracledb.STRING, maxSize: 16 },
        ip_addr_decrypted: { type: oracledb.STRING, maxSize: 128 },
        user_agent_decrypted: { type: oracledb.STRING, maxSize: 256 },
        track_name: { type: oracledb.STRING, maxSize: 256 },
        artist_name: { type: oracledb.STRING, maxSize: 256},
        album_name: { type: oracledb.STRING, maxSize: 256 },
        track_id: { type: oracledb.STRING, maxSize: 256 },
        reason_start: { type: oracledb.STRING, maxSize: 128 },
        reason_end: { type: oracledb.STRING, maxSize: 128 },
        shuffle: { type: oracledb.NUMBER },
        offline_mode: { type: oracledb.NUMBER },
        offline_timestamp: { type: oracledb.NUMBER },
        incognito_mode: { type: oracledb.NUMBER },
      }
    }

    plays.forEach(play => {
      play["track_id"] = play["spotify_track_uri"].split(":")[2]
      play["track_name"] = play["master_metadata_track_name"];
      play["artist_name"] = play["master_metadata_album_artist_name"];
      play["album_name"] = play["master_metadata_album_album_name"];
      play["offline_mode"] = play["offline"] ? 1 : 0;
      play["shuffle"] = play["shuffle"] ? 1 : 0;
      play["incognito_mode"] = play["incognito_mode"] ? 1 : 0;
      play["ts"] = `${play["ts"].substring(0, 10)} ${play["ts"].substring(11, 19)}`
    });

    await connection.execute("ALTER SESSION SET NLS_TIMESTAMP_FORMAT = 'YYYY-MM-DD HH24:MI:SS'");

    const result = await connection.executeMany(sql, plays, options);

    console.log(result.rowsAffected);

    res.json({ insertedCount: result.rowsAffected });
  } catch (err) {
    console.error(err);
    res.json(err);
  }
};

export const config = {
  api: {
    bodyParser: false
  }
};
