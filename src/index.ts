import "dotenv/config";
import express from "express";
import { UrlController } from "./controller/UrlController";
import { MongooseConnection } from "./database/MongooseConnection";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json);

const urlController = new UrlController();
const database = new MongooseConnection();
database.connect();

app.post("/shorten", urlController.shorten);
app.get("/:hash", urlController.redirect);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
