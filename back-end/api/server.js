// Application Programming Interface
// POST, GET, PUT, DELETE
// CRUD em rotas

import express from "../node_modules/express/index.js";
import { db } from "./connect.js";
import "dotenv/config";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors()); //O middleware atual no meio entre a requisição e a respsota do servidor, no caso do projeto foi usado para receber respostas
// entre portas diferentes

// app.use(express.json()); - Exemplo usado geralmente para post

// Endpoint
app.get("/", (request, response) => {
  response.send("Só vamos trabalhar com os endpoints '/artists' e '/songs'");
});

app.get("/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});

app.get("/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.listen(PORT, () => {
  console.log(`Servidor está escutando na porta ${PORT}`);
});
