import express from "express";
import router from "./routes";
import { databaseConnection } from "./utils/database";
const app = express();
app.use(express.json());
app.use(router);

databaseConnection();

app.listen(3333);
