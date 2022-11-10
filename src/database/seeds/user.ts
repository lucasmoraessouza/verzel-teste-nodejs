const bcrypt = require("bcrypt");
import UserModel from "../UserModel";
import { databaseConnection, databaseDisconnect } from "../../utils/database";

databaseConnection();

const seedUser = {
  username: "admin",
  password: bcrypt.hashSync("admin", 10),
};

const seedDB = async () => {
  await UserModel.insertMany(seedUser);
};

seedDB().then(() => {
  databaseDisconnect();
});
