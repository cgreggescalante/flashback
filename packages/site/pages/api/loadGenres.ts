import { createGenreIfNotExists } from "oracle-services";
import { Connection } from "oracledb";

const SpotifyWebApi = require("spotify-web-api-node");

const oracledb = require("oracledb");
require("dotenv").config();

try {
  oracledb.initOracleClient();
} catch (err) {}

export default async (req, res) => {
  let connection: Connection;

  try {
    connection = await oracledb.getConnection({
      user: "admin",
      password: "EQqJ7Y9CKbCN2UL_",
      connectionString: "flashback_high"
    });
  } catch (err) {
    res.json(err);
  }

  try {
    await createGenreIfNotExists(connection);
  } catch (err) {
    console.error(err);
    res.json(err);
    return;
  }

  let artist_ids;

  try {
    artist_ids = (
      await connection.execute("SELECT ID FROM ARTIST")
    ).rows;

    console.log(`${artist_ids.length} artist ids found`);

    const spotifyApi = new SpotifyWebApi({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET
    });

    await spotifyApi
      .clientCredentialsGrant()
      .then((data) => spotifyApi.setAccessToken(data.body["access_token"]));

    const raw_artists = [];

    let i = 0;

    while (i < artist_ids.length) {
      await spotifyApi
        .getArtists(artist_ids.slice(i, i + 50))
        .then((data) => raw_artists.push(...data.body.artists));

      i += 50;
    }

    const genres = []

    raw_artists.forEach(artist => {
      genres.push(...artist.genres.map(genre => ({
        artist_id: artist.id,
        name: genre
      })))
    })

    const sql =
      "INSERT INTO GENRE (NAME, ARTIST_ID) VALUES (:name, :artist_id)";

    const options = {
      autoCommit: true,
      bindDefs: {
        name: { type: oracledb.STRING, maxSize: 256 },
        artist_id: { type: oracledb.STRING, maxSize: 256 },
      }
    };

    const result = await connection.executeMany(sql, genres, options);

    console.log(result.rowsAffected);

    res.json({});
  } catch (err) {
    console.log(err);
    res.json(err.error);
  }
};