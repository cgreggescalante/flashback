const formidable = require("formidable");
const fs = require("fs");

const oracledb = require("oracledb");
// const SpotifyWebApi = require("spotify-web-api-node");
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
  const plays = [];
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
    await connection.execute("CREATE TABLE PLAY (" +
      "TS TIMESTAMP," +
      "USERNAME VARCHAR2(128)," +
      "PLATFORM VARCHAR2(128)," +
      "MS_PLAYED NUMBER(16, 0)," +
      "CONN_COUNTRY VARCHAR2(16)," +
      "IP_ADDR_DECRYPTED VARCHAR2(32)," +
      "USER_AGENT_DECRYPTED VARCHAR2(64)," +
      "MASTER_METADATA_TRACK_NAME VARCHAR2(256)," +
      "MASTER_METADATA_ALBUM_ARTIST_NAME VARCHAR2(256)," +
      "MASTER_METADATA_ALBUM_ALBUM_NAME VARCHAR2(256)," +
      "SPOTIFY_TRACK_URI VARCHAR2(256)," +
      "REASON_START VARCHAR2(128)," +
      "REASON_END VARCHAR2(128)," +
      "SHUFFLE NUMBER(8, 0)," +
      "OFFLINE NUMBER(8, 0)," +
      "OFFLINE_TIMESTAMP NUMBER(32, 0)," +
      "INCOGNITO_MODE NUMBER(8, 0))")
  } catch (err) {
    console.error(err)
  }

  res.json({});
  // if (req.method === "POST") {
  //   let connection: Connection;
  //
  //   let track_ids = new Set<string>;
  //
  //
  //
  //   console.log(`Found ${track_ids.length} distinct tracks.`);
  //
  //   try {
  //     const spotifyApi = new SpotifyWebApi({
  //       clientId: process.env.SPOTIFY_CLIENT_ID,
  //       clientSecret: process.env.SPOTIFY_CLIENT_SECRET
  //     });
  //
  //     await spotifyApi.clientCredentialsGrant()
  //       .then(data => spotifyApi.setAccessToken(data.body['access_token']))
  //
  //     const raw_tracks = []
  //
  //     let i = 0
  //
  //     while (i < track_ids.length) {
  //       await spotifyApi.getTracks(track_ids.slice(i, i + 50))
  //         .then(data => raw_tracks.push(...data.body.tracks));
  //
  //       i += 50;
  //     }
  //
  //     const tracks = raw_tracks.map(raw => ({
  //       album_id: raw.album.id,
  //       artist_id: raw.artists[0].id,
  //       name: raw.name,
  //       id: raw.id,
  //       explicit: raw.explicit ? 1 : 0,
  //       popularity: raw.popularity,
  //       track_number: raw.track_number
  //     }))
  //
  //     console.log("Retrieved track data");
  //
  //     await connection.execute("CREATE TABLE  \"TRACK\" " +
  //       "   (\"NAME\" VARCHAR2(4000) COLLATE \"USING_NLS_COMP\" NOT NULL ENABLE, " +
  //       "\"ID\" VARCHAR2(4000) COLLATE \"USING_NLS_COMP\" NOT NULL ENABLE, " +
  //       "\"ARTIST_ID\" VARCHAR2(4000) COLLATE \"USING_NLS_COMP\" NOT NULL ENABLE, " +
  //       "\"ALBUM_ID\" VARCHAR2(4000) COLLATE \"USING_NLS_COMP\", " +
  //       "\"EXPLICIT\" NUMBER NOT NULL ENABLE, " +
  //       "\"POPULARITY\" NUMBER NOT NULL ENABLE, " +
  //       "\"TRACK_NUMBER\" NUMBER, " +
  //       " CONSTRAINT \"TRACK_PK\" PRIMARY KEY (\"ID\")" +
  //       "  USING INDEX  ENABLE" +
  //       "   )  DEFAULT COLLATION \"USING_NLS_COMP\"")
  //
  //     const sql = "INSERT INTO TRACK (NAME, ID, ARTIST_ID, ALBUM_ID, EXPLICIT, POPULARITY, TRACK_NUMBER) VALUES (:name, :id, :artist_id, :album_id, :explicit, :popularity, :track_number)"
  //
  //     const options = {
  //       autoCommit: true,
  //       bindDefs: {
  //         name: { type: oracledb.STRING, maxSize: 4000 },
  //         id: { type: oracledb.STRING, maxSize: 4000 },
  //         artist_id: { type: oracledb.STRING, maxSize: 4000 },
  //         album_id: { type: oracledb.STRING, maxSize: 4000 },
  //         explicit: { type: oracledb.NUMBER },
  //         popularity: { type: oracledb.NUMBER },
  //         track_number: { type: oracledb.NUMBER }
  //       }
  //     }
  //
  //     const result = await connection.executeMany(sql, tracks, options);
  //
  //     console.log(`${result.rowsAffected} tracks added.`)
  //
  //     // const artist_ids = raw_tracks
  //     //   .map(track => track.artists[0].id)
  //     //
  //     // console.log(artist_ids)
  //
  //     res.json({})
  //   } catch (err) {
  //     console.error(err)
  //     res.json(err)
  //     return
  //   }
  // }
};

export const config = {
  api: {
    bodyParser: false
  }
};
