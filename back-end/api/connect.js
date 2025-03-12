import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Carrega o .env do diretório back-end
dotenv.config({ path: path.join(__dirname, "../.env") });

const URI = process.env.MONGO_URI;
if (!URI) {
  throw new Error("MONGO_URI não está definida nas variáveis de ambiente!");
}

import { MongoClient } from "mongodb";

const client = new MongoClient(URI);
export const db = client.db("Projeto_Spotify");
