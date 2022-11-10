import mongoose from "mongoose";
import { load } from "ts-dotenv";
import "dotenv/config";
const env = load({
  DATABASE_URL: String,
});

export const databaseConnection = () =>
  mongoose
    .connect(env.DATABASE_URL)

    .then((data) => {
      console.log("Connection succeded");
    })

    .catch((error) => {
      console.log("Error in DB Connection");
    });

export const databaseDisconnect = () => mongoose.connection.close();
