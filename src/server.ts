import express from "express";
import router from "./routes";
import cors from "cors";
import { databaseConnection } from "./utils/database";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

databaseConnection();

app.listen(3333);
