import { Connection } from "oracledb";
import { createTrackIfNotExists } from "oracle-services";

const SpotifyWebApi = require("spotify-web-api-node");

const oracledb = require("oracledb");
require("dotenv").config();

try {
  oracledb.initOracleClient();
} catch (err) {}

export default async (req, res) => {
  let connection: Connection

  try {
    connection = await oracledb.getConnection({ user: "admin", password: "EQqJ7Y9CKbCN2UL_", connectionString: "flashback_high" })
  } catch (err) {
    res.json(err)
  }

  try {
    await createTrackIfNotExists(connection);
  } catch (err) {
    console.error(err)
    res.json(err)
    return;
  }

  let track_ids;

  try {
    track_ids = (await connection.execute("SELECT DISTINCT TRACK_ID FROM PLAY")).rows;

    console.log(`${track_ids.length} track ids found`)

    const spotifyApi = new SpotifyWebApi({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET
    });

    await spotifyApi.clientCredentialsGrant()
      .then(data => spotifyApi.setAccessToken(data.body['access_token']))

    const raw_tracks = []

    let i = 0

    while (i < track_ids.length) {
      console.log(i)
      await spotifyApi.getTracks(track_ids.slice(i, i + 50))
        .then(data => raw_tracks.push(...data.body.tracks));

      i += 50;
    }

    const tracks = raw_tracks.map(raw => ({
      album_id: raw.album.id,
      artist_id: raw.artists[0].id,
      name: raw.name,
      id: raw.id,
      explicit: raw.explicit ? 1 : 0,
      popularity: raw.popularity,
      track_number: raw.track_number
    }))

    const sql = "INSERT INTO TRACK (ID, NAME, ALBUM_ID, ARTIST_ID, EXPLICIT, POPULARITY, TRACK_NUMBER) VALUES (:id, :name, :album_id, :artist_id, :explicit, :popularity, :track_number)"

    const options = {
      autoCommit: true,
      bindDefs: {
        id: { type: oracledb.STRING, maxSize: 256 },
        name: { type: oracledb.STRING, maxSize: 256 },
        album_id: { type: oracledb.STRING, maxSize: 256 },
        artist_id: { type: oracledb.STRING, maxSize: 256 },
        explicit: { type: oracledb.NUMBER },
        popularity: { type: oracledb.NUMBER },
        track_number: { type: oracledb.NUMBER }
      }
    }

    const result = await connection.executeMany(sql, tracks, options);

    console.log(result.rowsAffected);

    res.json({})
  } catch (err) {
    console.log(err)
    res.json(err.error)
  }
}


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