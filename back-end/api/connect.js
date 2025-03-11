import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config(); // Carrega as variáveis de ambiente do Render

const URI = process.env.MONGO_URI;

if (!URI) {
  throw new Error("MONGO_URI não está definida nas variáveis de ambiente!");
}

const client = new MongoClient(URI);
export const db = client.db("Projeto_Spotify");
