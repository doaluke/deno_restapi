import { MongoClient } from  "https://deno.land/x/mongo@v0.9.1/mod.ts";

const client = new MongoClient();
const mongoUrl = <MONGO_URL>;

client.connectWithUri(mongoUrl);

const db = client.database("deno_dev");

interface carSchema {
	_id: { $oid: string };
	name: string;
	series: string;
}

const cars = db.collection<carSchema>('cars');

export default cars;

