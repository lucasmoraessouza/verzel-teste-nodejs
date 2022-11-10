import mongoose, { Schema } from "mongoose";

const CarModel = new Schema(
  {
    brand: String,
    model: String,
    version: String,
    year: Number,
    km: Number,
    exchangeType: String,
    value: Number,
    image: String,
  },
  { timestamps: true }
);

export default mongoose.model("Car", CarModel);
