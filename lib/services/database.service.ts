import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

export const collections: { plays?: mongoDB.Collection } = {}

export const connectToDatabase = async () => {
    dotenv.config();

    const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING ?? "");

    await client.connect();

    const db: mongoDB.Db = client.db(process.env.DB_NAME);

    collections.plays = db.collection(process.env.PLAY_COLLECTION_NAME ?? "");
}
