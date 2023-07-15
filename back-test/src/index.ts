import express from "express";
import * as http from "http";
import { PORT } from "./config";
import { readFileAndGenerateSlotFile } from "./services/slot.service";

const app = express();
const server = http.createServer(app);
app.use(express.json());

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);

  readFileAndGenerateSlotFile();
});
