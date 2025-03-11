import dotenv from "dotenv";
dotenv.config();

const URI = process.env.MONGO_URI;
console.log(URI);
if (!URI) {
  throw new Error("MONGO_URI não está definida nas variáveis de ambiente!");
}

import { MongoClient } from "mongodb";

const client = new MongoClient(URI);
export const db = client.db("Projeto_Spotify");
