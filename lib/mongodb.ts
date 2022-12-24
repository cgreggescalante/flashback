import {MongoClient} from 'mongodb'

if (!process.env.DB_CONN_STRING) {
    throw new Error('Invalid environment variable: "MONGODB_URI"')
}

const uri = process.env.DB_CONN_STRING
const options = {}

let client
let clientPromise: Promise<MongoClient>

if (!process.env.DB_CONN_STRING) {
    throw new Error('Please add your Mongo URI to .env.local')
}

client = new MongoClient(uri, options)
clientPromise = client.connect()

export default clientPromise