import mongoose, { Schema } from "mongoose";

const CarModel = new Schema(
  {
    brand: String,
    model: String,
    year: Number,
    value: Number,
    image: String,
  },
  { timestamps: true }
);

export default mongoose.model("Car", CarModel);
