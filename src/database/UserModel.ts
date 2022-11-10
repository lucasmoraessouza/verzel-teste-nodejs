import mongoose, { Schema } from "mongoose";

const UserModel = new Schema(
  {
    username: { type: String, unique: true },
    password: String,
  },
  { timestamps: true }
);

export default mongoose.model("User", UserModel);
